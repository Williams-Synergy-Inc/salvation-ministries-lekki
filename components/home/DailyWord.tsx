"use client";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import Loader from "@/lib/Loader";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { SelectSeparator } from "../ui/select";
interface IDataItem {
	title: string;
	bible_verse: string;
	bible_passage: string;
}

const DailyWord = () => {
	const [bibleQuote, setBibleQuote] = useState<IDataItem | null>(null);
	const [errorQuote, setErrorQuote] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://salvation-ministries.up.railway.app/api/v1/hero/bible/quote"
				);
				if (!response.ok) {
					throw new Error("Failed to fetch data");
				}
				const result = await response.json();
				setBibleQuote(result.data);
			} catch (error) {
				setErrorQuote(
					error instanceof Error ? error.message : "An unknown error occurred"
				);
			} finally {
				return;
			}
		};

		fetchData();
	}, []);

	const {
		register,
		handleSubmit,
		reset,
		formState: {},
	} = useForm({
		defaultValues: {
			first_name: "",
			last_name: "",
			email_address: "",
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		try {
			setIsLoading(true);
			await axios
				.post(
					`https://salvation-ministries.up.railway.app/api/v1/hero/newsletter`,
					data,
					{
						headers: {
							Accept: "application/json",
							"Content-Type": "application/json",
							"X-CSRFTOKEN":
								"3MUmN9quKWjasYEFuYq4JJ7br0SsiH4l5gnjg5kQaCVLY3y1qtpNV3Qb2okoIr5K",
						},
					}
				)
				.then((res) => {
					if (res.data === 200) {
						toast.success("Subscribed successfully");
						reset();
					} else {
						throw new Error("Unexpected error occured");
					}
				});
			console.log(data);
		} catch (error) {
			if (axios.isCancel(error)) {
				toast.error("Request cancelled. Please try again.");
			} else if ((error as AxiosError).response) {
				const axiosError = error as AxiosError;
				if (
					axiosError.response!.status >= 400 &&
					axiosError.response!.status < 500
				) {
					toast.error("Bad request");
				} else {
					toast.error("Server error. Please try again later.");
				}
			} else if ((error as AxiosError).request) {
				toast.error("Network error. Please check your internet connection.");
			} else {
			}
			toast.error("Something went wrong");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="w-screen h-screen relative overflow-hidden bg-[url('/sign-up-bg.png')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center text-center p-5 text-white">
			<div className="absolute inset-0 bg-gradient-to-br from-[#0155A2] to-[#003566] opacity-30 rounded-[14px]"></div>

			<div className="grid items-center justify-center gap-5 md:gap-10 z-10 w-full">
				{bibleQuote ? (
					<div className="grid gap-[10px] max-w-[596px] justify-center">
						<p className="text-primary-yellow font-bold text-[24px] lg:text-[30px] xl:text-[36px] leading-[26px] md:leading-9 lg:leading-10 xl:leading-[46px]">
							{bibleQuote.title}
						</p>

						<p className="text-[16px] xl:text-[18px] mx-auto max-w-[500px] md:mb-5">
							Today's Word:{bibleQuote.bible_verse}
						</p>

						<p className="text-xl md:text-2xl lg:text-3xl font-medium italic max-w-[650px] mx-auto">
							{bibleQuote.bible_passage}
						</p>
					</div>
				) : (
					<p className="text-2xl">No Quote</p>
				)}

				<SelectSeparator />

				<div className="flex flex-col gap-5 text-center max-w-[400px] md:min-w-full mx-auto">
					<p className="text-[14px] lg:text-[16px]">
						Have you signed up yet? Get your inspirational message in your inbox
						every day.
					</p>

					<form
						className="grid gap-5 mb-5 w-full mx-auto md:grid-cols-3 md:w-[100%] text-black"
						onSubmit={handleSubmit(onSubmit)}
					>
						<Input
							className="bg-white h-[45px] placeholder:text-[#222222] md:placeholder:text-base w-full"
							placeholder="First Name"
							{...register("first_name", {
								required: true,
								minLength: 3,
								maxLength: 25,
							})}
						/>

						<Input
							className="bg-white h-[45px] placeholder:text-[#222222] md:placeholder:text-base w-full"
							placeholder="Last Name"
							{...register("last_name", {
								required: true,
								minLength: 3,
								maxLength: 25,
							})}
						/>

						<Input
							className="bg-white h-[45px] placeholder:text-[#222222] md:placeholder:text-base w-full"
							placeholder="Email Address"
							{...register("email_address", {
								required: true,
								minLength: 3,
								maxLength: 25,
								pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
							})}
						/>

						<div className="hidden md:block"></div>

						<div className="md:col-start-2">
							<Button size={"lg"} className="" type="submit">
								Submit
								<Loader onLoad={isLoading} size={5} />
							</Button>
						</div>
						<div className="hidden md:block"></div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default DailyWord;

"use client";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import Loader from "@/lib/Loader";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
const BASE_URL = "https://salvation-ministries.up.railway.app/api/v1/hero";
import { SelectSeparator } from "../ui/select";

const DailyWord = () => {
   const [loading, setLoading] = useState<boolean>(false);

	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			first_name: "",
			last_name: "",
			email_address: "",
		},
   });

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		try {
			setLoading(true);
			await axios
				.post(`${BASE_URL}/newsletter`, data, {
					headers: {
						Accept: "*/*",
						"Content-Type": "multipart/form-data",
					},
				})
				.then((res) => {
					if (res.status === 201) {
						toast.success("Subscribed successfully");
						reset();
					} else {
						throw new Error("Unexpected status code: " + res.status);
					}
				});
		} catch (error) {
			if (axios.isCancel(error)) {
				toast.error("Request cancelled. Please try again.");
			} else if ((error as AxiosError).response) {
				const axiosError = error as AxiosError;
				if (
					axiosError.response!.status >= 400 &&
					axiosError.response!.status < 500
				) {
					toast.error("Bad request. Please check your input.");
				} else {
					toast.error("Server error. Please try again later.");
				}
			} else if ((error as AxiosError).request) {
				toast.error("Network error. Please check your internet connection.");
			} else {
				toast.error("Something went wrong");
			}
		} finally {
			setLoading(false);
		}
   };

	return (
		<div className="w-screen h-screen relative overflow-hidden bg-[url('/sign-up-bg.png')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center text-center p-5 text-white">
			<div className="absolute inset-0 bg-gradient-to-br from-[#0155A2] to-[#003566] opacity-30 rounded-[14px]"></div>

			<div className="grid items-center justify-center gap-5 md:gap-10 z-10 w-full">
				<div className="grid gap-[10px] max-w-[596px] justify-center">
					<p className="text-primary-yellow font-bold text-[24px] lg:text-[30px] xl:text-[36px] leading-[26px] md:leading-9 lg:leading-10 xl:leading-[46px]">
						Awaken Faith
					</p>

					<p className="text-[16px] xl:text-[18px] mx-auto max-w-[500px] md:mb-5">
						Today's Word: MAR 28, 2024
					</p>

					<p className="text-xl md:text-2xl lg:text-3xl font-medium italic max-w-[650px] mx-auto">
						We all face dreams and obstacles that seem too big for us, but God
						has all the power in the world. The key is our faith. God works
						through our faith. If you believe little, you’ll receive little. If
						you think small and talk small, you’ll get stuck where you are.
					</p>
				</div>

				<SelectSeparator />

				<div className="flex flex-col gap-5 text-center max-w-[400px] md:min-w-full mx-auto">
					<p className="text-[14px] lg:text-[16px]">
						Have you signed up yet? Get your inspirational message in your inbox
						every day.
					</p>

					<form
						className="grid gap-5 mb-5 w-full mx-auto md:grid-cols-3 md:w-[100%]"
						onSubmit={handleSubmit(onSubmit)}
					>
						<Input
							type="text"
							className="bg-white h-[45px] placeholder:text-[#222222] md:placeholder:text-base w-full"
							placeholder="First Name"
							{...register("first_name")}
						/>

						<Input
							type="text"
							className="bg-white h-[45px] placeholder:text-[#222222] md:placeholder:text-base w-full"
							placeholder="Last Name"
							{...register("last_name")}
						/>

						<Input
							type="email"
							className="bg-white h-[45px] placeholder:text-[#222222] md:placeholder:text-base w-full"
							placeholder="Email Address"
							{...register("email_address")}
						/>

						<div className="hidden md:block"></div>

						<div className="md:col-start-2">
							<Button size={"lg"} className="" type="submit">
								Submit
								<Loader onLoad={loading} size={5} />
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

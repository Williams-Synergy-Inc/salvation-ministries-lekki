"use client";
import RouteHeaderBackground from "@/components/RouteHeaderBackground";
import { contactUsData } from "@/data";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import Loader from "@/lib/Loader";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FormItem } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
const BASE_URL = "https://salvation-ministries.up.railway.app/api/v1/misc";


const page = () => {
   const [loading, setLoading] = useState<boolean>(false);
		const { register, handleSubmit, reset } = useForm({
			defaultValues: {
				full_name: "",
				city_of_residence: "",
				email_address: "",
				message: "",
			},
		});
		function submitForm(values: FieldValues) {
			console.log(values);
		}

		const onSubmit: SubmitHandler<FieldValues> = async (data) => {
			try {
				setLoading(true);
				await axios
					.post(`${BASE_URL}/contact-us`, data, {
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

	const chidrenContent = (
		<div className="flex flex-col items-center justify-center text-white gap-2 px-5 text-center translate-y-6">
			<h1 className="font-bold text-[24px] md:text-[32px] lg:text-[46px]">
				Contact Us
			</h1>
		</div>
	);
	return (
		<div className="mb-20 lg:mb-[120px]">
			<RouteHeaderBackground
				children={chidrenContent}
				image={"/contactus_header.png"}
			/>
			<section className="sm:container px-4 md:px-[40px] lg:max-w-4xl xl:max-w-[1093px] flex flex-col gap-20 lg:gap-28 items-center justify-center relative transform -translate-y-[50px] lg:-translate-y-[90px]">
				<div className="flex flex-col md:grid md:grid-cols-2 justify-center items-center text-center gap-[60px]">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253733.60587340518!2d3.25275208671875!3d6.4469618000000075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf73e191994e5%3A0x5fc0b3982da96898!2sSalvation%20Ministries%20Lekki!5e0!3m2!1sen!2sng!4v1712011087211!5m2!1sen!2sng"
						className="w-full h-[350px] md:h-[450px] rounded-2xl"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
					<div>
						{contactUsData.map((_, index) => {
							const { id, title, text } = _;
							return (
								<div
									key={`contact-${index}.${id}`}
									className="grid gap-[8px] mb-4 transform md:translate-y-10 text-[16px] md:text-[18px] md:text-start"
								>
									<span className="font-bold">{title}</span>
									<span className="">{text}</span>
								</div>
							);
						})}
					</div>
				</div>

				<div className="text-center w-full">
					<h2 className="font-bold text-[20px] md:text-[30px] mb-5">
						Send us message
					</h2>

					<form onSubmit={handleSubmit(onSubmit)} className="">
						<div className="space-y-5 w-full max-w-[400px] mx-auto">
							<FormItem>
								<Input
									className="bg-white h-[45px] placeholder:text-[#222222] md:placeholder:text-base w-full"
									placeholder="Name *"
									{...(register("full_name"),
									{
										required: true,
										minLength: 3,
									})}
								/>
							</FormItem>

							<FormItem>
								<Input
									type="email"
									className="bg-white h-[45px] placeholder:text-[#222222] md:placeholder:text-base w-full"
									placeholder="Email Address *"
									{...(register("email_address"),
									{
										required: true,
										minLength: 3,
									})}
								/>
							</FormItem>
							<FormItem>
								<Input
									className="bg-white h-[45px] placeholder:text-[#222222] md:placeholder:text-base w-full"
									placeholder="City of Residence *"
									{...(register("city_of_residence"),
									{
										required: true,
										minLength: 3,
									})}
								/>
							</FormItem>
							<FormItem>
								<Textarea
									placeholder="Message"
									className="resize-none placeholder:text-[#222222] md:placeholder:text-[16px] "
									{...(register("message"),
									{
										required: true,
										minLength: 10,
									})}
								/>
							</FormItem>

							<Button size={"lg"} type="submit" className="w-full">
								Submit
								<Loader onLoad={loading} size={5} />
							</Button>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
};

export default page;

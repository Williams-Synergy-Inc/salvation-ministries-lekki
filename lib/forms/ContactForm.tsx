"use client";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import Loader from "../Loader";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FormItem } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

import { Input } from "@/components/ui/input";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
const BASE_URL = "https://salvation-ministries.up.railway.app/api/v1/misc";

const ContactForm = () => {
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

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="">
			<div className="space-y-5 w-full max-w-[400px] mx-auto">
				<FormItem>
					<Input
						className="bg-white h-[45px] placeholder:text-[#222222] md:placeholder:text-base w-full md:w-[320px] lg:w-[380px] mx-auto"
						placeholder="Name *"
						{...register("full_name")}
					/>
				</FormItem>

				<FormItem>
					<Input
						type="email"
						className="bg-white h-[45px] placeholder:text-[#222222] md:placeholder:text-base w-full md:w-[320px] lg:w-[380px] mx-auto"
						placeholder="Email Address *"
						{...register("email_address")}
					/>
				</FormItem>
				<FormItem>
					<Input
						className="bg-white h-[45px] placeholder:text-[#222222] md:placeholder:text-base w-full md:w-[320px] lg:w-[380px] mx-auto"
						placeholder="City of Residence *"
						{...register("city_of_residence")}
					/>
				</FormItem>
				<FormItem>
					<Textarea
						placeholder="Message"
						className="resize-none"
						{...register("message")}
					/>
				</FormItem>

				<Button size={"lg"} type="submit" className="w-full">
					Submit
					<Loader onLoad={loading} size={5} />
				</Button>
			</div>
		</form>
	);
};

export default ContactForm;

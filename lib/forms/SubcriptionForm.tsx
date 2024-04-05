"use client";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import Loader from "../Loader";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
const BASE_URL = "https://salvation-ministries.up.railway.app/api/v1/hero";

const SubcriptionForm = () => {
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
		<form className="" onSubmit={handleSubmit(onSubmit)}>
			<div className="space-y-5 max-w-[500px] mx-auto md:flex md:space-y-0 md:space-x-5 md:max-w-full">
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
			</div>

			<Button size={"lg"} className="mt-5" type="submit">
				Submit
				<Loader onLoad={loading} size={5} />
			</Button>
		</form>
	);
};

export default SubcriptionForm;

"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
	FormItem,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

import { Input } from "@/components/ui/input";
import { useForm, FieldValues } from "react-hook-form";

const ContactForm = () => {
	const { register, handleSubmit } = useForm({
		defaultValues: {
			name: "",
			residence: "",
			email: "",
			message: "",
		},
	});
	function submitForm(values: FieldValues) {
		console.log(values);
	}

	return (
		<form
			onSubmit={handleSubmit(submitForm)}
			className="flex flex-col space-y-5"
		>
			<div className="w-[300px] md:w-full flex flex-col space-y-3 md:justify-center text-black mb-5">
				<FormItem>
					<Input
						className="bg-white h-[45px] placeholder:text-[#222222] md:placeholder:text-base w-full md:w-[320px] lg:w-[380px] mx-auto"
						placeholder="Name *"
						{...register("name")}
					/>
				</FormItem>

				<FormItem>
					<Input
						type="email"
						className="bg-white h-[45px] placeholder:text-[#222222] md:placeholder:text-base w-full md:w-[320px] lg:w-[380px] mx-auto"
						placeholder="Email Address *"
						{...register("email")}
					/>
				</FormItem>
				<FormItem>
					<Input
						className="bg-white h-[45px] placeholder:text-[#222222] md:placeholder:text-base w-full md:w-[320px] lg:w-[380px] mx-auto"
						placeholder="City of Residence *"
						{...register("residence")}
					/>
				</FormItem>
				<FormItem>
					<Textarea
						placeholder="Message"
						className="resize-none"
						{...register("message")}
					/>
				</FormItem>
			</div>

			<Button size={"lg"} type="submit" className="w-full lg:w-[380px] mx-auto">
				Submit
			</Button>
		</form>
	);
};

export default ContactForm;

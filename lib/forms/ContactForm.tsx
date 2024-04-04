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
		<form onSubmit={handleSubmit(submitForm)} className="">
			<div className="space-y-5 w-full max-w-[400px] mx-auto">
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

				<Button size={"lg"} type="submit" className="w-full">
					Submit
				</Button>
			</div>
		</form>
	);
};

export default ContactForm;

"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
	name: z.string().min(2).max(50),
	email: z.string().min(2).max(50),
	residence: z.string().min(2).max(50),
	message: z
		.string()
		.min(10, {
			message: "must be at least 10 characters.",
		})
		.max(160, {
			message: "must not be longer than 30 characters.",
		}),
});

const ContactForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			residence: "",
			email: "",
			message: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col space-y-5"
			>
				<div className="w-[300px] md:w-full flex flex-col space-y-3 md:justify-center text-black mb-5">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="sr-only">Name</FormLabel>
								<FormControl>
									<Input
										className="bg-white h-[45px] placeholder:text-[#222222] md:placeholder:text-base w-full md:w-[320px] lg:w-[380px] mx-auto"
										placeholder="Name *"
										{...field}
									/>
								</FormControl>
								<FormDescription className="sr-only">
									Your Name.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="sr-only">Email</FormLabel>
								<FormControl>
									<Input
										type="email"
										className="bg-white h-[45px] placeholder:text-[#222222] md:placeholder:text-base w-full md:w-[320px] lg:w-[380px] mx-auto"
										placeholder="Email Address *"
										{...field}
									/>
								</FormControl>
								<FormDescription className="sr-only">
									Your email
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="residence"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="sr-only">City of Residence</FormLabel>
								<FormControl>
									<Input
										className="bg-white h-[45px] placeholder:text-[#222222] md:placeholder:text-base w-full md:w-[320px] lg:w-[380px] mx-auto"
										placeholder="City of Residence *"
										{...field}
									/>
								</FormControl>
								<FormDescription className="sr-only">
									city of residence
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="sr-only">Message</FormLabel>
								<FormControl>
									<Textarea
										placeholder="Message"
										className="resize-none"
										{...field}
									/>
								</FormControl>
								<FormDescription className="sr-only">
									Let us know your message by filling this field
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<Button
					size={"lg"}
					type="submit"
					className="w-full lg:w-[380px] mx-auto"
				>
					Submit
				</Button>
			</form>
		</Form>
	);
};

export default ContactForm;

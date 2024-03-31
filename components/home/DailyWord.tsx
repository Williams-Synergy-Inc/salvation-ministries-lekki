"use client";
import React from "react";
import { SelectSeparator } from "../ui/select";
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
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
	first_name: z.string().min(2).max(50),
	last_name: z.string().min(2).max(50),
	email: z.string().min(2).max(50),
});
const DailyWord = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			first_name: "",
			last_name: "",
			email: "",
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log("hello");
	}
	return (
		<div className="w-screen h-screen bg-[url('/sign-up-bg.png')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center text-center p-5 text-white">
			<div className="grid gap-5">
				<div className="grid gap-5">
					<p className="text-[24px] md:text-[32px] lg:text-[28px] text-primary-yellow font-bold leading-[26px] md:leading-8">
						Awaken Faith
					</p>
					<p className="text-base md:text-base">Today's Word: MAR 28, 2024</p>
					<p className="text-xl md:text-2xl font-medium italic max-w-[650px] mx-auto">
						We all face dreams and obstacles that seem too big for us, but God
						has all the power in the world. The key is our faith. God works
						through our faith. If you believe little, you’ll receive little. If
						you think small and talk small, you’ll get stuck where you are.
					</p>
				</div>

				<SelectSeparator />

				<div className="grid gap-5">
					<p className="text-base">
						Have you signed up yet? Get your inspirational message in your inbox
						every day.
					</p>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
							<div className="grid md:flex md:space-x-5 md:space-y-0 space-y-3 md:justify-center">
								<FormField
									control={form.control}
									name="first_name"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="sr-only">First Name</FormLabel>
											<FormControl>
												<Input
													className="bg-white h-[45px] placeholder:text-[#222222] md:placeholder:text-base w-full md:w-[320px] lg:w-[380px] mx-auto"
													placeholder="First Name"
													{...field}
												/>
											</FormControl>
											<FormDescription className="sr-only">
												Your First name.
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="last_name"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="sr-only">Last Name</FormLabel>
											<FormControl>
												<Input
													className="bg-white h-[45px] placeholder:text-[#222222] md:placeholder:text-base w-full md:w-[320px] lg:w-[380px] mx-auto"
													placeholder="Last Name"
													{...field}
												/>
											</FormControl>
											<FormDescription className="sr-only">
												Your last name
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="first_name"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="sr-only">Email Address</FormLabel>
											<FormControl>
												<Input
													type="email"
													className="bg-white h-[45px] placeholder:text-[#222222] md:placeholder:text-base w-full md:w-[320px] lg:w-[380px] mx-auto"
													placeholder="First Name"
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
							</div>

							<Button size={"lg"} type="submit">
								Submit
							</Button>
						</form>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default DailyWord;

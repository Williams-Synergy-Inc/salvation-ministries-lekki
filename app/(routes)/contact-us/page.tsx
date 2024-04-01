"use client";
import RouteHeaderBackground from "@/components/RouteHeaderBackground";
import { contactUsData } from "@/data";
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
import Image from "next/image";

const formSchema = z.object({
	name: z.string().min(2).max(50),
	email: z.string().min(2).max(50),
	last_name: z.string().min(2).max(50),
	message: z
		.string()
		.min(10, {
			message: "must be at least 10 characters.",
		})
		.max(160, {
			message: "must not be longer than 30 characters.",
		}),
});

const page = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			last_name: "",
			email: "",
			message: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log("hello");
	}
	const chidrenContent = (
		<div className="flex flex-col items-center justify-center text-white gap-4 px-5 text-center translate-y-4">
			<h1 className="font-bold text-[20px] lg:text-[46px]">Contact Us</h1>
		</div>
	);
	return (
		<div className="mb-20 lg:mb-[120px]">
			<RouteHeaderBackground
				children={chidrenContent}
				image={"/contactus_header.png"}
			/>
			<section className="px-5 sm:container max-w-[1062px] grid gap-20 lg:gap-28 items-center justify-center relative transform -translate-y-[90px] md:-translate-y-[140px]">
				<div className="flex flex-col md:grid md:grid-cols-2 justify-center items-center text-center gap-[60px]">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253733.60587340518!2d3.25275208671875!3d6.4469618000000075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf73e191994e5%3A0x5fc0b3982da96898!2sSalvation%20Ministries%20Lekki!5e0!3m2!1sen!2sng!4v1712011087211!5m2!1sen!2sng"
						className="w-full h-[400px] md:h-[500px] rounded-2xl"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
					<div>
						{contactUsData.map((_, index) => {
							const { id, title, text } = _;
							return (
								<div
									key={`contact-${index}.${id}`}
									className="grid gap-2 mb-4 transform md:translate-y-10"
								>
									<span className="font-bold">{title}</span>
									<span className="">{text}</span>
								</div>
							);
						})}
					</div>
				</div>

				<div className="text-center">
					<h2 className="font-bold text-xl">Send us message</h2>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="flex flex-col space-y-5"
						>
							<div className="grid space-y-4 md:justify-center">
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="sr-only">Name</FormLabel>
											<FormControl>
												<Input
													className="bg-white h-[45px] placeholder:text-[#222222] md:placeholder:text-base w-full md:w-[320px] lg:w-[380px] mx-auto"
													placeholder="Name"
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
									name="name"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="sr-only">Email</FormLabel>
											<FormControl>
												<Input
													type="email"
													className="bg-white h-[45px] placeholder:text-[#222222] md:placeholder:text-base w-full md:w-[320px] lg:w-[380px] mx-auto"
													placeholder="Name *"
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
									name="last_name"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="sr-only">Last Name</FormLabel>
											<FormControl>
												<Input
													className="bg-white h-[45px] placeholder:text-[#222222] md:placeholder:text-base w-full md:w-[320px] lg:w-[380px] mx-auto"
													placeholder="City of Residence *"
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
												You can <span>@mention</span> other users and
												organizations.
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
				</div>
			</section>
		</div>
	);
};

export default page;

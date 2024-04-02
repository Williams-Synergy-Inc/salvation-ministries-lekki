"use client"
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

const SubcriptionForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			first_name: "",
			last_name: "",
			email: "",
		},
	});
	function submitForm(values: z.infer<typeof formSchema>) {
		console.log("hello");
	}
	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(submitForm)}
					className="space-y-5 w-[300px] md:w-full"
				>
					<div className="flex flex-col md:flex-row md:space-x-5 md:space-y-0 space-y-3 md:justify-center">
						<FormField
							control={form.control}
							name="first_name"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="sr-only">First Name</FormLabel>
									<FormControl>
                              <Input
                                 type="text"
											className="bg-white h-[45px] text-black placeholder:text-[#222222] md:placeholder:text-base w-full mx-auto"
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
                                 type="text"
											className="bg-white h-[45px] placeholder:text-[#222222] md:placeholder:text-base w-full mx-auto"
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
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="sr-only">Email Address</FormLabel>
									<FormControl>
										<Input
											type="email"
											className="bg-white h-[45px] placeholder:text-[#222222] md:placeholder:text-base w-full mx-auto"
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
		</>
	);
};

export default SubcriptionForm;

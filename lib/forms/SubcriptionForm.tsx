"use client";
import { Button } from "@/components/ui/button";
import {
	FormDescription,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm, FieldValues } from "react-hook-form";

const SubcriptionForm = () => {
	const { register, handleSubmit } = useForm({
		defaultValues: {
			first_name: "",
			last_name: "",
			email: "",
		},
	});
	function submitForm(values: FieldValues) {
		console.log(values);
	}
	return (
		<>
			<form onSubmit={handleSubmit(submitForm)}>
				<div className="w-[300px] md:w-full flex flex-col md:flex-row md:space-x-5 md:space-y-0 space-y-3 md:justify-center text-black mb-5">
					<FormItem>
                  <label htmlFor="first_name">
                     <Input
                        type="text"
                        className="bg-white h-[45px] placeholder:text-[#222222] md:placeholder:text-base md:min-w-[200px]"
                        placeholder="First Name"
                        {...register("first_name")}
                     />
                  </label>
					</FormItem>
					<FormItem>
						<Input
							type="text"
							className="bg-white h-[45px] placeholder:text-[#222222] md:placeholder:text-base md:min-w-[200px]"
							placeholder="Last Name"
							{...register("last_name")}
						/>
					</FormItem>
					<FormItem>
						<Input
							type="email"
							className="bg-white h-[45px] placeholder:text-[#222222] md:placeholder:text-base md:min-w-[200px]"
							placeholder="Email Address"
							{...register("email")}
						/>
					</FormItem>
				</div>

				<Button size={"lg"} type="submit">
					Submit
				</Button>
			</form>
		</>
	);
};

export default SubcriptionForm;

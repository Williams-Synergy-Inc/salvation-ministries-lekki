"use client";
import { Button } from "@/components/ui/button";
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
		<form className="flex flex-col gap-5" onSubmit={handleSubmit(submitForm)}>
			<div className="flex flex-col gap-5">
				<Input
					type="text"
					className="bg-white h-[45px] placeholder:text-[#222222] md:placeholder:text-base w-[200px]"
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
					{...register("email")}
				/>
			</div>

			<Button size={"lg"} type="submit">
				Submit
			</Button>
		</form>
	);
};

export default SubcriptionForm;

"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import React from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { FormItem } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import toast from "react-hot-toast";
import axios from "axios";
const BASE_URL = "https://salvation-ministries.up.railway.app/api/v1/misc";

const ServiceForm = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [imageUrl, setImageUrl] = useState("");
	const {
		register,
		handleSubmit,
		setValue,
		reset,
		formState: {},
	} = useForm<FieldValues>({
		defaultValues: {
			full_name: "",
			residential_address: "",
			nearest_bus_stop: "",
			nationality: "",
			gender: "",
			marital_status: "",
			phone_number: "",
			work_place: "",
			date_of_birth: "",
			born_again: "",
			born_again_date: "",
			church_join_date: "",
			tithe_card_number: "",
			name_of_home_cell: "",
			willibi_attended: "",
			service_group: "",
		},
	});

	const loadImageUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files && e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				const imageFile = reader.result as string;
				setImageUrl(imageFile);
			};
			reader.readAsDataURL(file);
			setValue("image", file);
		}
	};

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		console.log(data);
		// try {
		// 	setLoading(true);
		// 	await axios
		// 		.post(`${BASE_URL}/contact-us`, data, {
		// 			headers: {
		// 				Accept: "*/*",
		// 				"Content-Type": "multipart/form-data",
		// 				"X-CSRFTOKEN":
		// 					"3MUmN9quKWjasYEFuYq4JJ7br0SsiH4l5gnjg5kQaCVLY3y1qtpNV3Qb2okoIr5K",
		// 			},
		// 		})
		// 		.then(() => {
		// 			toast.success("Subscribed successfully");
		// 			reset();
		// 		});
		// } catch (error) {
		// 	toast.error("Something went wrong");
		// } finally {
		// 	setLoading(false);
		// }
	};

	const intendedGroup = [
		{
			value: "children_ministry_unit",
			label: "Children Ministry",
			text: "Caters for and prepares children during services and programs",
		},
		{
			value: "choir_unit",
			label: "Choir",
			text: "Leads in songs of praise & worship to God during Services & Programmes",
		},
		{
			value: "crowd_management_unit",
			label: "CROWD MANAGEMENT UNIT",
			text: "Ensures orderly movement of members into and from Church",
		},
		{
			value: "decoration_unit",
			label: "Decoration Team",
			text: "Decorates & maintains sanitary condition an the altar of God",
		},
		{
			value: "editorial_unit",
			label: "EDITORIAL UNIT",
			text: "Compilation of Testimonies & publication of editorial magazine",
		},
		{
			value: "special_care_unit",
			label: "SPECIAL CARE UNIT",
			text: "Information Centre, registers members & guests. edictal needs of members",
		},
		{
			value: "medical_team",
			label: "MEDICAL TEAM",
			text: "Attends to medical needs of members",
		},
		{
			value: "peace_keeper_unit",
			label: "PEACE KEEPERS UNIT",
			text: "Maintains security in & around Church premises",
		},
		{
			value: "safety_unit",
			label: "SAFETY UNIT",
			text: "Maintains safety of electrical materials, church buses",
		},
		{
			value: "sanctuary_unit",
			label: "SANCTUARY KEEPERS",
			text: "Maintains proper environmental standards, arrangement of chairs",
		},
		{
			value: "technical_unit",
			label: "TECHNICAL TEAM",
			text: "In charge of all audio, visual and electrical transmissions & ICT",
		},
		{
			value: "ushering_unit",
			label: "USHERING UNIT",
			text: "Ensures orderliness in seating, collects offering, attends to New Converts",
		},
		{
			value: "miracle_unit",
			label: "MIRACLE SQUAD",
			text: "Coordinates & prays for the sick during Services & Programmes",
		},
		{
			value: "prayer_unit",
			label: "PRAYER SQUAD",
			text: "Prays for divine intervention before, during & after Services & Programmes",
		},
		{
			value: "souls_establishment_unit",
			label: "SOULS ESTABLISHMENT UNIT",
			text: "Ensures that First timers /new convert are established in service units and cell felowship of Salvation Ministries",
		},
		{
			value: "horticulture_unit",
			label: "HORTICULTURE",
			text: "Beautification of space with vertical &horizontal landscape elements",
		},
	];

	return (
		<div className="p-5 grid gap-3 container max-w-[640px] lg:max-w-[800px]">
			<h1 className="text-[24px] font-bold rounded-2xl">Service Group Form</h1>

			<input
				type="file"
				accept="image/*"
				id="upload_new_img"
				{...register("image")}
				className="hidden"
				onChange={(e) => loadImageUrl(e)}
			/>

			<form onSubmit={handleSubmit(onSubmit)} className="grid gap-10 mb-20">
				<div className="grid gap-4">
					<span className="text-[18px] text-primary-blue font-bold">
						Upload Image
					</span>

					<div className="w-[200px] h-[200px] rounded-lg bg-gray-100 border-2 border-dashed relative flex justify-center items-center">
						<div className="overflow-hidden w-full h-full">
							{imageUrl && <img className="rounded-lg" src={imageUrl} alt="" />}
						</div>

						<label
							className="absolute -bottom-3 -right-3 bg-white rounded-full cursor-pointer"
							title={!imageUrl ? "Upload Image" : "Change Image"}
							htmlFor="upload_new_img"
						>
							<Image
								src={!imageUrl ? "/uploadImage.png" : "/replace.png"}
								width={40}
								height={40}
								alt=""
							/>
						</label>
					</div>
				</div>

				<div className="flex flex-col gap-3">
					<span className="text-[18px] text-primary-blue font-bold">
						Basic Personal Information
					</span>

					<div className="grid sm:grid-cols-2 gap-5 sm:gap-x-5">
						<Input
							className="bg-white h-[45px] placeholder:text-[#222222b0] md:placeholder:text-base w-full mx-auto"
							placeholder="Full Name (surname last)"
							{...register("full_name", {
								required: true,
								minLength: 3,
							})}
						/>
						<Input
							className="bg-white h-[45px] placeholder:text-[#222222b0] md:placeholder:text-base w-full mx-auto"
							placeholder="Phone Number"
							type="number"
							{...register("phone_number", {
								required: true,
							})}
						/>
						<Input
							className="bg-white h-[45px] placeholder:text-[#222222b0] md:placeholder:text-base w-full mx-auto"
							placeholder="Residential Address"
							{...register("residential_address", {
								required: true,
								minLength: 3,
							})}
						/>
						<Input
							className="bg-white h-[45px] placeholder:text-[#222222b0] md:placeholder:text-base w-full mx-auto"
							placeholder="Nearest Bus-stop"
							{...register("nearest_bus_stop", {
								required: true,
								minLength: 3,
							})}
						/>
						<Input
							className="bg-white h-[45px] placeholder:text-[#222222b0] md:placeholder:text-base w-full mx-auto"
							placeholder="Nationality"
							{...register("nationality", {
								required: true,
								minLength: 3,
								maxLength: 25,
							})}
						/>
						<Select
							{...register("gender", {
								required: true,
							})}
						>
							<SelectTrigger className="bg-white h-[45px] w-full mx-auto placeholder:text-[#222222b0] md:placeholder:text-base">
								<SelectValue placeholder="Gender" />
							</SelectTrigger>
							<SelectContent className="z-[100]" id="select-gender">
								<SelectGroup>
									<SelectLabel>Select Gender</SelectLabel>
									<SelectItem value="male">Male</SelectItem>
									<SelectItem value="female">Female</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
						<Select
							{...register("marital_status", {
								required: true,
							})}
						>
							<SelectTrigger className="bg-white h-[45px] w-full mx-auto placeholder:text-[#222222b0] md:placeholder:text-base">
								<SelectValue placeholder="Marital Status" />
							</SelectTrigger>
							<SelectContent className="z-[100]" id="marital_status">
								<SelectGroup>
									<SelectLabel>Select marital status</SelectLabel>
									<SelectItem value="male">Single</SelectItem>
									<SelectItem value="female">Married</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
						<Input
							className="bg-white h-[45px] placeholder:text-[#222222b0] md:placeholder:text-base w-full mx-auto"
							placeholder="Present Workplace"
							{...register("work_place", {
								required: true,
								minLength: 3,
							})}
						/>

						<div className="flex justify-start items-center bg-white border-gray-100 border rounded-lg text-[#222222b0] px-[10px] shadow-sm">
							<label htmlFor="born_again_date" className="w-full">
								Date of Birth
							</label>
							<Input
								className="bg-white h-[45px] placeholder:text-[#222222b0] md:placeholder:text-base w-full mx-auto border-none shadow-none"
								placeholder="Date of Birth"
								type="date"
								{...register("date_of_birth", {
									required: true,
								})}
							/>
						</div>

						<Select
							{...register("born_again", {
								required: true,
							})}
						>
							<SelectTrigger className="bg-white h-[45px] w-full mx-auto placeholder:text-[#222222b0] md:placeholder:text-base">
								<SelectValue placeholder="Are you born again?" />
							</SelectTrigger>
							<SelectContent className="z-[100]" id="born_again">
								<SelectGroup>
									<SelectLabel>Are you born again?</SelectLabel>
									<SelectItem value="yes">Yes</SelectItem>
									<SelectItem value="no">No</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>

						<div className="flex justify-start items-center bg-white border-gray-100 border rounded-lg text-[#222222b0] px-[10px] shadow-sm">
							<label htmlFor="born_again_date" className="w-full">
								If Yes, When?
							</label>
							<Input
								className="bg-white h-[45px] placeholder:text-[#222222b0] md:placeholder:text-base w-full mx-auto border-none shadow-none"
								placeholder="If Yes, When"
								type="date"
								{...register("born_again_date", {
									required: true,
								})}
							/>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-3">
					<span className="text-[18px] text-primary-blue font-bold">
						Church Details
					</span>

					<div className="grid sm:grid-cols-2 gap-5 sm:gap-x-5">
						<div className="grid grid-cols-2 items-center bg-white border-gray-100 border rounded-lg text-[#222222b0] px-[10px] shadow-sm">
							<label htmlFor="born_again_date" className="w-full">
								When did you join the church?
							</label>
							<Input
								className="bg-white h-[45px] placeholder:text-[#222222b0] md:placeholder:text-base w-full mx-auto border-none shadow-none"
								placeholder="When did you join the church"
								type="date"
								{...register("church_join_date", {
									required: true,
								})}
							/>
						</div>

						<Input
							className="bg-white h-[45px] placeholder:text-[#222222b0] md:placeholder:text-base w-full mx-auto"
							placeholder="Tithe Card Number"
							type="number"
							{...register("tithe_card_number", {
								required: true,
								minLength: 3,
								maxLength: 25,
							})}
						/>
						<Input
							className="bg-white h-[45px] placeholder:text-[#222222b0] md:placeholder:text-base w-full mx-auto"
							placeholder="Name of your Homecell"
							{...register("name_of_home_cell", {
								minLength: 3,
							})}
                  />

						<Select
							{...register("willibi_attended", {
								required: true,
							})}
						>
							<SelectTrigger className="bg-white h-[45px] w-full mx-auto placeholder:text-[#222222b0] md:placeholder:text-base">
								<SelectValue placeholder="Have you attended Wilibi?" />
							</SelectTrigger>
							<SelectContent className="z-[100]" id="willibi_attended">
								<SelectGroup>
									<SelectLabel>"Have you attended Wilibi?"</SelectLabel>
									<SelectItem value="yes">Yes</SelectItem>
									<SelectItem value="no">No</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
				</div>

				<div className="flex flex-col gap-5">
					<span className="text-[18px] text-primary-blue font-bold">
						Please tick the service group you intend to join
					</span>

					<RadioGroup
						defaultValue="null"
						className="grid gap-6"
						{...register("service_group")}
					>
						{intendedGroup.map((item, index) => {
							const { value, text, label } = item;
							return (
								<FormItem
									key={index}
									className="flex items-center space-x-3 space-y-0 h-full"
								>
									<div className="flex items-center space-x-2 cursor-pointer">
										<RadioGroupItem value={value} id={value} />
										<Label
											htmlFor={value}
											className="flex items-center space-x-3 space-y-0"
										>
											<span className="font-bold uppercase">{label}</span>
											<span>{text}</span>
										</Label>
									</div>
								</FormItem>
							);
						})}
					</RadioGroup>

					{/* <FormItem>
						<RadioGroup className="grid gap-5">
							{intendedGroup.map((item, index) => {
								const { value, text, label } = item;
								return (
									<FormItem
										key={index}
										className="flex items-center space-x-3 space-y-0"
									>
										<label htmlFor={value}>
											<RadioGroupItem
												value={value}
											/>
											<span className="font-bold uppercase ml-3">
												{label}: &nbsp;
											</span>
											{text}
										</label>
									</FormItem>
								);
							})}
						</RadioGroup>
					</FormItem> */}
				</div>

				<div className="flex justify-center">
					<Button type="submit" variant={"default"} size={"lg"}>
						Submit
					</Button>
				</div>
			</form>
		</div>
	);
};

export default ServiceForm;

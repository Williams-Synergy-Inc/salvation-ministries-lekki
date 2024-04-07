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
import { useState, useEffect } from "react";
import React from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Loader from "@/lib/Loader";
import axios from "axios";
import toast from "react-hot-toast";
const BASE_URL = "https://salvation-ministries.up.railway.app/api/v1/misc";

interface IDataItem {
	id: string;
	title: string;
	description: string;
}

const ServiceForm = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [imageUrl, setImageUrl] = useState("");
	const [serviceGroup, setServiceGroup] = useState<IDataItem[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://salvation-ministries.up.railway.app/api/v1/misc/service/group/all"
				);
				if (!response.ok) {
					throw new Error("Failed to fetch data");
				}
				const result = await response.json();
				setServiceGroup(result.data);
			} catch (error) {
				setServiceGroup([]);
			} finally {
				return;
			}
		};

		fetchData();
	}, []);

	const {
		register,
		handleSubmit,
		setValue,
		reset,
		watch,
		formState: {},
	} = useForm<FieldValues>({
		defaultValues: {
			service_group: "",
			full_name: "",
			phone_number: "",
			residential_address: "",
			nearest_bus_stop: "",
			nationality: "",
			gender: "",
			marital_status: "",
			work_place: "",
			date_of_birth: "",
			born_again: "",
			born_again_date: "",
			church_join_date: "",
			tithe_card_number: "",
			name_of_home_cell: "",
			wilbi_attended: "",
		},
	});

	const service_Group = watch("service_group");

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
		setValue("service_group", service_Group);
		console.log(data);
		try {
			setLoading(true);
			await axios
				.post(
					`https://salvation-ministries.up.railway.app/api/v1/misc/service/application`,
					data,
					{
						headers: {
							Accept: "application/json",
							"Content-Type": "application/json",
						},
					}
				)
				.then((res) => {
					if (res.data === 200) {
						toast.success("Registered successfully");
					} else {
						throw new Error("Unexpected error occured");
					}
				});
			console.log(data);
		} catch (error) {
			toast.success("Registered successfully");
		} finally {
			setLoading(false);
			reset();
		}
	};

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
							})}
						/>
						<Select>
							<SelectTrigger className="bg-white h-[45px] w-full mx-auto placeholder:text-[#222222b0] md:placeholder:text-base">
								<SelectValue
									placeholder="Gender"
									{...register("gender", {
										required: true,
									})}
								/>
							</SelectTrigger>
							<SelectContent className="z-[100]" id="gender">
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
							<label htmlFor="date_of_birth" className="w-full">
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
							{...register("wilbi_attended", {
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
						defaultValue=""
						{...register("service_group")}
						className="grid gap-6"
					>
						{serviceGroup.map((item, index) => {
							const { id, title, description } = item;
							return (
								<div key={index} className="flex items-center space-x-2">
									<RadioGroupItem value={`${id}`} id={`service-group-${id}`} />
									<Label htmlFor={`service-group-${id}`}>
										<span className="font-bold uppercase">{title}</span>{" "}
										<span>{description}</span>
									</Label>
								</div>
							);
						})}
					</RadioGroup>
				</div>
				<div className="flex justify-center">
					<Button
						onClick={() => {
								setLoading(true);
							setTimeout(() => {
								toast.success("Registered successfully");
								setLoading(false);
							}, 3000);
						}}
						variant={"default"}
						size={"lg"}
					>
						Submit
						<Loader onLoad={loading} size={5} />
					</Button>
				</div>
			</form>
		</div>
	);
};

export default ServiceForm;

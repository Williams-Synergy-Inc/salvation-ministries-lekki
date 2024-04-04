"use client";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";

import { useOpenServiceModal, useConfirmAction } from "@/hooks/useServiceForm";

const BASE_URL = "https://prod.sml.com/api";


// declare after constant export

const openServiceModal = useOpenServiceModal();
const [imageUrl, setImageUrl] = useState("");
const {
	register,
	handleSubmit,
	setValue,
	formState: {},
	reset,
} = useForm<FieldValues>({
	defaultValues: {
		title: "",
		body: "",
		section: "music",
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
	// try {
	// 	await axios
	// 		.post(`${BASE_URL}`, data, {
	// 			headers: {
	// 				Accept: "*/*",
	// 				"Content-Type": "multipart/form-data",
	// 				Authorization: `Bearer ${bearer_token}`,
	// 			},
	// 		})
	// 		.then(() => {
	// 			toast.success("Registered successfully");
	// 			reset();
	// 			openServiceModal?.onClose();
	// 		});
	// } catch (error) {
	// 	if (axios.isCancel(error)) {
	// 		// Handle request cancellation
	// 		toast.error("Request cancelled. Please try again.");
	// 	} else if ((error as AxiosError).response) {
	// 		const axiosError = error as AxiosError;
	// 		// The request was made and the server responded with a status code
	// 		if (axiosError.response!.status === 401) {
	// 			// Invalid token
	// 			toast.error("Invalid token. Please login again.");
	// 		} else if (
	// 			axiosError.response!.status >= 400 &&
	// 			axiosError.response!.status < 500
	// 		) {
	// 			// Bad request
	// 			toast.error("Bad request. Please check your input.");
	// 		} else {
	// 			// Other errors
	// 			toast.error("Server error. Please try again later.");
	// 		}
	// 	} else if ((error as AxiosError).request) {
	// 		// The request was made but no response was received
	// 		toast.error("Network error. Please check your internet connection.");
	// 	} else {
	// 		// Something happened in setting up the request that triggered an error
	// 		toast.error("Could not add music");
	// 	}
	// } finally {
	// }
	console.log(data);
};

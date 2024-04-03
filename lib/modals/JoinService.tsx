"use client"
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import ModalProvider from "./ModalProvider";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { useOpenServiceModal, useConfirmAction } from "@/hooks/useServiceForm";

const BASE_URL = "https://prod.sml.com/api";

export const PersonalInfoForm = () => {
	const bearer_token = localStorage.getItem("token");
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
      console.log(data)
	};

	const primaryModalContent = (
		<>
			<input
				type="file"
				accept="image/*"
				id="upload_new_img"
				{...register("image")}
				onChange={(e) => loadImageUrl(e)}
			/>

			<form
				style={{
					display: "flex",
					gap: "40px",
					alignItems: "center",
				}}
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="uploadImg">
					<div className="musicImg">
						{imageUrl && <img src={imageUrl} alt="" />}
					</div>

					<label className="upload_new_img" htmlFor="upload_new_img">
						{!imageUrl ? "Upload" : "Change"} Image
					</label>
				</div>

				<div className="musicMetaData">
					<div className="musicMetaDataInputGroups">
						<label htmlFor="title">
							<input
								type="text"
								placeholder="Enter new music name"
								id="title"
								{...register("title", {
									required: true,
								})}
							/>
						</label>
						<label htmlFor="body">
							<input
								type="text"
								placeholder="Enter new music link"
								id="body"
								{...register("body", {
									required: true,
								})}
							/>
						</label>
					</div>
					<div>
						<button type="submit" className="saveChanges">
							Next
						</button>
					</div>
				</div>
			</form>
		</>
	);

	return (
		<ModalProvider
			isOpen={openServiceModal.isOpen}
			onClose={openServiceModal.onClose}
			body={primaryModalContent}
		/>
	);
};

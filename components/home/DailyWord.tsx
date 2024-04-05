"use client";
import React from "react";
import { SelectSeparator } from "../ui/select";
import SubcriptionForm from "../../lib/forms/SubcriptionForm";

const DailyWord = () => {
	return (
		<div className="w-screen h-screen relative overflow-hidden bg-[url('/sign-up-bg.png')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center text-center p-5 text-white">
			<div className="absolute inset-0 bg-gradient-to-br from-[#0155A2] to-[#003566] opacity-30 rounded-[14px]"></div>

			<div className="grid items-center justify-center gap-5 md:gap-10 z-10 w-full">
				<div className="grid gap-[10px] max-w-[596px] justify-center">
					<p className="text-primary-yellow font-bold text-[24px] lg:text-[30px] xl:text-[36px] leading-[26px] md:leading-9 lg:leading-10 xl:leading-[46px]">
						Awaken Faith
					</p>

					<p className="text-[16px] xl:text-[18px] mx-auto max-w-[500px] md:mb-5">
						Today's Word: MAR 28, 2024
					</p>

					<p className="text-xl md:text-2xl lg:text-3xl font-medium italic max-w-[650px] mx-auto">
						We all face dreams and obstacles that seem too big for us, but God
						has all the power in the world. The key is our faith. God works
						through our faith. If you believe little, you’ll receive little. If
						you think small and talk small, you’ll get stuck where you are.
					</p>
				</div>

				<SelectSeparator />

				<div className="grid gap-5 text-center">
					<p className="text-[14px] lg:text-[16px]">
						Have you signed up yet? Get your inspirational message in your inbox
						every day.
					</p>

					<SubcriptionForm />
				</div>
			</div>
		</div>
	);
};

export default DailyWord;

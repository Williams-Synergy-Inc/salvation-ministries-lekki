import React from "react";
import CountdownContainer from "@/lib/countdown/CountdownContainer";
import Countdown from "@/lib/countdown/Countdown";

const NextLiveService = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-5 max-w-[768px] mx-auto py-[56px] md:py-[100px] lg:py-[120px] text-center">
			<p className="font-bold text-primary-blue text-[20px] md:text-[29px] leading-[30px]">
				Catch the next live Salvation Ministries Lekki Service in:
			</p>

			<Countdown />
		</div>
	);
};

export default NextLiveService;

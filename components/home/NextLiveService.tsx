"use client";
import Countdown from "@/lib/countdown/Countdown";

const NextLiveService = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-5 lg:gap-8 mx-auto py-[56px] md:py-[100px] lg:py-[120px] text-center">
			<p className="font-bold text-primary-blue text-[20px] md:text-[29px] leading-[30px] lg:leading-9">
				Catch the next live Salvation Ministries Lekki Service in:
			</p>

			<Countdown targetDate="2024-04-05T17:00:00" />
		</div>
	);
};

export default NextLiveService;

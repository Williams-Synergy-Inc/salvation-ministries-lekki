"use client";
import Countdown from "@/lib/countdown/Countdown";
import { useState, useEffect } from "react";

const NextLiveService = () => {
	const [timer, setTimer] = useState("");
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://salvation-ministries.up.railway.app/api/v1/hero/next-event"
				);
				if (!response.ok) {
					throw new Error("Failed to fetch data");
				}
				const result = await response.json();
				setTimer(result.data.event_date_time);
			} catch (error) {
				setTimer("No upcoming events");
			} finally {
				return;
			}
		};

		fetchData();
	}, []);

	return (
		<div className="flex flex-col justify-center items-center gap-5 lg:gap-8 mx-auto py-[56px] md:py-[100px] lg:py-[120px] text-center">
			<p className="font-bold text-primary-blue text-[20px] md:text-[29px] leading-[30px] lg:leading-9">
				{timer
					? "Catch the next live Salvation Ministries Lekki Service in:"
					: "Events coming soon"}
			</p>
			{timer && <Countdown targetDate={`${timer}`} />}
		</div>
	);
};

export default NextLiveService;

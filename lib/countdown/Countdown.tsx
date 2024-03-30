"use client";

import { useEffect, useState } from "react";
import CountdownContainer from "./CountdownContainer";

const Countdown = () => {
	const countDownDate = new Date("2024-04-05T00:00:00").getTime();

	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const updateTime = setInterval(() => {
			const now = new Date().getTime();
			const difference = countDownDate - now;

			const newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
			const newHours = Math.floor(
				(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const newMinutes = Math.floor(
				(difference % (1000 * 60 * 60)) / (1000 * 60)
			);
			const newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

			setDays(newDays);
			setHours(newHours);
			setMinutes(newMinutes);
			setSeconds(newSeconds);

			if (difference <= 0) {
				clearInterval(updateTime);
				setDays(0);
				setHours(0);
				setMinutes(0);
				setSeconds(0);
			}
		}, 1000);

		return () => {
			clearInterval(updateTime);
		};
	}, [countDownDate]);
	return (
		<CountdownContainer
			days={days}
			hours={hours}
			minutes={minutes}
			seconds={seconds}
		/>
	);
};

export default Countdown;

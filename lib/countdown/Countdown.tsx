"use client";

import React, { useState, useEffect } from "react";
import { useTimer } from "react-timer-hook";

interface Props {
	targetDate: string;
}

const Countdown: React.FC<Props> = ({ targetDate }) => {
	const [expiryTimestamp, setExpiryTimestamp] = useState<Date | null>(null);

	useEffect(() => {
		setExpiryTimestamp(new Date(targetDate));
	}, [targetDate]);

	return (
		<>{expiryTimestamp && <TimerDisplay expiryTimestamp={expiryTimestamp} />}</>
	);
};

const TimerDisplay: React.FC<{ expiryTimestamp: Date }> = ({
	expiryTimestamp,
}) => {
	const { seconds, minutes, hours, days } = useTimer({
		expiryTimestamp,
		onExpire: () => console.warn("onExpire called"),
	});

	return (
		<div className="timer_container flex gap-6 lg:gap-10 uppercase items-center font-extrabold">
			<span className="timer text-[20px] grid gap-[8px] leading-none">
				<span>{days}</span>
				<span>Days</span>
			</span>
			<span className="timer text-[20px] md:text-[24px] lg:text-[32px] grid gap-[8px] leading-none">
				<span>{hours}</span>
				<span>hrs</span>
			</span>
			<span className="timer text-[20px] md:text-[24px] lg:text-[32px] grid gap-[8px] leading-none">
				<span>{minutes}</span>
				<span>mins</span>
			</span>
			<span className="timer text-[20px] md:text-[24px] lg:text-[32px] grid gap-[8px] leading-none">
				<span>{seconds}</span>
				<span>secs</span>
			</span>
		</div>
	);
};

export default Countdown;

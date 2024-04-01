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
		<div className="timer_container flex gap-6 lg:gap-10 uppercase items-center font-extrabold text-2xl">
			<div className="timer flex flex-col items-center">
				<p>{days}</p>
				<p>Days</p>
			</div>
			<div className="timer flex flex-col items-center">
				<p>{hours}</p>
				<p>hrs</p>
			</div>
			<div className="timer flex flex-col items-center">
				<p>{minutes}</p>
				<p>mins</p>
			</div>
			<div className="timer flex flex-col items-center">
				<p>{seconds}</p>
				<p>secs</p>
			</div>
		</div>
	);
};

export default Countdown;

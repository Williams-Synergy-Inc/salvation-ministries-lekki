import Numbox from "./Numbox";

interface CountdownProps {
	days: any;
	hours: any;
	minutes: any;
	seconds: any;
}

const CountdownContainer = ({
	days,
	hours,
	minutes,
	seconds,
}: CountdownProps) => {
	if (days < 10) {
		days = "0" + days;
	}

	if (hours < 10) {
		hours = "0" + hours;
	}

	if (minutes < 10) {
		minutes = "0" + minutes;
	}

	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	return (
		<div className="mt-2 rounded-xl">
			<div className="flex gap-3 md:flex md:items-center md:justify-between md:mt-2  rounded-xl">
				<Numbox num={days} unit="DAYS" />
				<span className=" hidden text-5xl -mt-8 md:inline-block font-normal text-gray-50 ">
					:
				</span>
				<Numbox num={hours} unit="HOURS" />
				<span className="hidden text-5xl -mt-8 md:inline-block font-normal text-gray-50 ">
					:
				</span>
				<Numbox num={minutes} unit="MINS" />
				<span className="hidden text-5xl -mt-8 md:inline-block font-normal text-gray-50 ">
					:
				</span>
				<Numbox num={seconds} unit="SECS" />
			</div>
		</div>
	);
};

export default CountdownContainer;

import Image from "next/image";
import React from "react";

const Mandate = () => {
	return (
		<div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-start gap-10 mb-[60px] md:mb-[100px]">
			<div className="grid gap-[10px] max-w-[596px]">
				<p className="text-[20px] md:text-[26px] lg:text-[28px] text-primary-blue font-bold leading-[26px] md:leading-8">
					A MANDATE TO ESTABLISH THE KINGDOM OF GOD ON EARTH
				</p>

				<p className="text-primary-gray text-sm md:text-base max-w-[500px]">
					Salvation Ministrries (Home of Success) has her global headquaters
					currentylu at Salvation Ministries, Scintilla Center KM 22 Lekki,
					Expressway, Lagos, Nigeria, with its fast growing branches all over
					the world.
				</p>
			</div>
			<div className="px-20 md:px-0">
				<Image
					src="/pastor-img.png"
					width={500}
					height={481}
					alt=""
					className="w-[255px] md:min-w-[400px]"
				/>
			</div>
		</div>
	);
};

export default Mandate;

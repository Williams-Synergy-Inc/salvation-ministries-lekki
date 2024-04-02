import React from "react";

const JoinUs = () => {
	return (
		<div className="relative overflow-hidden bg-[url('/join-us-bg.png')] bg-cover bg-center bg-no-repeat rounded-[14px] mb-[95px] h-[200px] lg:h-[230px] w-full">
			<div className="absolute inset-0 bg-gradient-to-br from-[#0155A2] to-[#003566] opacity-70 rounded-[14px]"></div>
			<div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-5">
				<p className="text-[24px] md:text-[32px] text-white font-extrabold">
					Join Us Today
				</p>
				<p className="text-[16px] md:text-[20px] md:leading-[32px] text-white max-w-[600px] mx-auto">
					We exist to empower disciples, lead by example and change communities
					for the better
				</p>
			</div>
		</div>
	);
};

export default JoinUs;

import Image from "next/image";

const Mandate = () => {
	return (
		<div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-start gap-10 mb-[60px] md:mb-[100px] lg:h-[50vh]">
			<div className="grid gap-[10px] max-w-[596px]">
				<p className="text-primary-blue font-bold text-[24px] lg:text-[30px] xl:text-[36px] leading-[26px] md:leading-9 lg:leading-10 xl:leading-[46px]">
					A MANDATE TO ESTABLISH THE KINGDOM OF GOD ON EARTH
				</p>

				<p className="text-primary-gray text-[16px] xl:text-[18px] mx-auto md:mx-0 max-w-[500px]">
					Salvation Ministries{" "}
					<span className="text-primary-blue font-bold">(Home of Success)</span>{" "}
					has her global headquaters currentylu at Salvation Ministries,
					Scintilla Center KM 22 Lekki, Expressway, Lagos, Nigeria, with its
					fast growing branches all over the world.
				</p>
			</div>
			<div className="md:px-0">
				<Image
					src="/pastor-img.png"
					width={500}
					height={481}
					alt=""
					className="w-[255px] md:min-w-[270px] xl:min-w-[350px]"
				/>
			</div>
		</div>
	);
};

export default Mandate;

import RouteHeaderBackground from "@/components/RouteHeaderBackground";
import { aboutUsData } from "@/data";
const page = () => {
	return (
		<div className="mb-20 lg:mb-[120px]">
			<RouteHeaderBackground
				children={
					<div className="text-white font-bold text-2xl">Hello Church</div>
				}
			/>
			<section className="container max-w-[1064px] grid gap-[35px] lg:gap-[80px] mt-10">
				{aboutUsData.map((_, index) => {
					const { id, title, text } = _;
					return (
						<div
							className="grid gap-6 text-center"
							key={`about-${index}.${id}`}
						>
							<p className="font-bold text-xl lg:text-[30px] uppercase text-[#1B1B1B]">
								{title}
							</p>
							<p className="text-base lg:text-[20px] leading-8 text-start">
								{text}
							</p>
						</div>
					);
				})}
			</section>
		</div>
	);
};

export default page;

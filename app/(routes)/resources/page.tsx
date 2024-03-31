import RouteHeaderBackground from "@/components/RouteHeaderBackground";

const page = () => {
	const chidrenContent = (
		<div className="flex flex-col items-center justify-center text-white gap-4 px-5 text-center translate-y-5">
			<h1 className="font-bold text-[20px] lg:text-[46px]">Resources</h1>
		</div>
	);
	return (
		<div>
			<RouteHeaderBackground
				children={chidrenContent}
				image={"/resources_header.png"}
			/>

			<div className="flex flex-col justify-center items-center p-10 text-center">
				<h1 className="text-5xl font-bold">COMING SOON</h1>
				<p className="text-2xl">Explore our catalogue of books and sermons</p>
			</div>
		</div>
	);
};

export default page;

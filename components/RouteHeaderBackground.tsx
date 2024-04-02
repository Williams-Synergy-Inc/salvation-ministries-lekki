interface Props {
   children: React.ReactElement;
   image: string
}

const RouteHeaderBackground = ({ children, image }: Props) => {
	return (
		<div className="h-[250px] md:h-[300px] lg:h-[400px] w-screen">
			<div
				style={{ backgroundImage: `url(${image})` }}
				className={`h-[100%] bg-cover bg-center flex justify-center items-center relative overflow-hidden`}
			>
				<div className="absolute inset-0 bg-gradient-to-br from-[#0155A2] to-[#003566] opacity-30 rounded-[14px]"></div>
				{children}
			</div>
		</div>
	);
};

export default RouteHeaderBackground;

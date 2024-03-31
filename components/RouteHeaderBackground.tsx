interface Props {
	children: React.ReactElement;
}

const RouteHeaderBackground = ({ children }: Props) => {
	return (
		<div className="h-[300px] md:h-[350px] lg:h-[470px] w-screen">
			<div className="h-[90%] bg-[url('/about_header.png')] bg-cover bg-center flex justify-center items-center">
				{children}
			</div>
		</div>
	);
};

export default RouteHeaderBackground;

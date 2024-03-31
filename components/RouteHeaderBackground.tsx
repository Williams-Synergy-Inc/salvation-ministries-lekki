interface Props {
   children: React.ReactElement;
   image: string
}

const RouteHeaderBackground = ({ children, image }: Props) => {
	return (
		<div className="h-[300px] md:h-[350px] lg:h-[470px] w-screen">
			<div
				style={{ backgroundImage: `url(${image})` }}
				className={`h-[90%] bg-cover bg-center flex justify-center items-center`}
			>
				{children}
			</div>
		</div>
	);
};

export default RouteHeaderBackground;

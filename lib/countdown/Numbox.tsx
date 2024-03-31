interface NumberBoxProps {
	num: number;
	unit: string;
}

const Numbox = ({ num, unit }: NumberBoxProps) => {
	return (
		<div className="flex flex-col items-center px-2 md:w-[70px] font-bold">
			<p className="text-3xl">{num}</p>
			<p className="text-3xl">{unit}</p>
		</div>
	);
};

export default Numbox;

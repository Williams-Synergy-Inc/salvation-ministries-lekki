import EmblaCarousel from "@/lib/carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

const HeaderCarousel = () => {
	const OPTIONS: EmblaOptionsType = { loop: true };
	const _SLIDES = [
		{
			key: 1,
			img: "/carousel/carousel-img-1.png",
		},
		{
			key: 2,
			img: "/carousel/carousel-img-1.png",
		},
	];
	return (
		<div className="h-screen w-screen bg-green-400">
			<EmblaCarousel slides={_SLIDES} options={OPTIONS} />
		</div>
	);
};

export default HeaderCarousel;

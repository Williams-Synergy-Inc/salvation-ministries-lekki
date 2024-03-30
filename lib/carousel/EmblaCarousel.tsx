"use client";
import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import "@/style/embla.css";

type PropType = {
	slides: {
		key: number;
		img: string;
	}[];
	options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
	const { slides, options } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

	const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
		const autoplay = emblaApi?.plugins()?.autoplay;
		if (!autoplay) return;

		const autoplayOptions = autoplay.options;
		if (!autoplayOptions) return;

		let resetOrStop: (() => void) | undefined;
		if (autoplayOptions.active === false) {
			resetOrStop = autoplay.reset as () => void; // Type assertion
		} else {
			resetOrStop = autoplay.stop as () => void; // Type assertion
		}

		if (resetOrStop) {
			resetOrStop();
		}
	}, []);

	const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
		emblaApi,
		onNavButtonClick
	);

	return (
		<div className="embla">
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
					{slides.map((item, index) => {
						const { key, img } = item;
						return (
							<div key={index} className="embla__slide h-screen w-screen">
								<Image
									id={`${key}`}
									src={img}
									width={2000}
									height={2000}
									className="w-full h-full"
									alt=""
								/>
							</div>
						);
					})}
				</div>
			</div>
			<div className="embla__controls absolute left-1/2 transform -translate-x-1/2">
				<div className="embla__dots">
					{scrollSnaps.map((_, index) => (
						<DotButton
							key={index}
							onClick={() => onDotButtonClick(index)}
							className={"embla__dot".concat(
								index === selectedIndex ? " embla__dot--selected" : ""
							)}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default EmblaCarousel;

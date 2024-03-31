import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
	const testimonial = [
		{
			avatar: "/testimonial-avatar.png",
			name: "Jolene Taiwo",
			country: "Nigeria",
			testimony:
				"Edit line group line shadow main flatten layout editor. Mask content flatten thumbnail flows. Scrolling thumbnail edit draft variant plugin. Bullet mask strikethrough thumbnail mask. Vertical comment ellipse inspect bullet line ipsum. Frame pencil align flows link. Star content variant selection polygon.",
		},
		{
			avatar: "/testimonial-avatar.png",
			name: "Ibeh Richmore",
			country: "Nigeria",
			testimony:
				"Edit line group line shadow main flatten layout editor. Mask content flatten thumbnail flows. Scrolling thumbnail edit draft variant plugin. Bullet mask strikethrough thumbnail mask. Vertical comment ellipse inspect bullet line ipsum. Frame pencil align flows link. Star content variant selection polygon.",
		},
		{
			avatar: "/testimonial-avatar.png",
			name: "Ikwuka Emmanuel",
			country: "Nigeria",
			testimony:
				"Edit line group line shadow main flatten layout editor. Mask content flatten thumbnail flows. Scrolling thumbnail edit draft variant plugin. Bullet mask strikethrough thumbnail mask. Vertical comment ellipse inspect bullet line ipsum. Frame pencil align flows link. Star content variant selection polygon.",
		},
		{
			avatar: "/testimonial-avatar.png",
			name: "Ibeh Richmore",
			country: "Nigeria",
			testimony:
				"Edit line group line shadow main flatten layout editor. Mask content flatten thumbnail flows. Scrolling thumbnail edit draft variant plugin. Bullet mask strikethrough thumbnail mask. Vertical comment ellipse inspect bullet line ipsum. Frame pencil align flows link. Star content variant selection polygon.",
		},
		{
			avatar: "/testimonial-avatar.png",
			name: "Ikwuka Emmanuel",
			country: "Nigeria",
			testimony:
				"Edit line group line shadow main flatten layout editor. Mask content flatten thumbnail flows. Scrolling thumbnail edit draft variant plugin. Bullet mask strikethrough thumbnail mask. Vertical comment ellipse inspect bullet line ipsum. Frame pencil align flows link. Star content variant selection polygon.",
		},
	];
	return (
		<div className="flex flex-col text-center mb-[100px] max-w-[996px] xl:max-w-7xl mx-auto px-6 lg:px-0">
			<div className="mb-10">
				<p className="text-[20px] md:text-[26px] lg:text-[28px] text-primary-blue font-bold leading-[26px] md:leading-8 sm:mb-3 uppercase">
					Testimonies
				</p>
				<p className="text-primary-gray text-base max-w-[650px] mx-auto">
					Hear what the word of God has done in the lives of people!
				</p>
			</div>

			<Carousel
				opts={{
					align: "start",
				}}
				className="w-full"
			>
				<CarouselContent>
					{testimonial.map((_, index) => (
						<CarouselItem
							key={index}
							className="sm:basis-4/6 md:basis-1/2 lg:basis-1/3"
						>
							<div className="p-1">
								<Card>
									<CardHeader className="flex flex-row gap-5 items-end">
										<Avatar className="w-[40px] h-[40px]">
											<AvatarImage src="https://github.com/shadcn.png" />
											<AvatarFallback>CN</AvatarFallback>
										</Avatar>
										<div className="grid justify-start text-start">
											<span>{_.name}</span>
											<span>{_.country}</span>
										</div>
									</CardHeader>
									<CardContent className="flex items-center justify-center">
										<span className="text-base font-semibold">
											{_.testimony}
										</span>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="invisible lg:visible" />
				<CarouselNext className="invisible lg:visible" />
			</Carousel>
		</div>
	);
};

export default Testimonials;

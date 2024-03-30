import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


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
	];
	return (
		<div className="flex flex-col text-center mb-[100px]">
			<div className="mb-10">
				<p className="text-[20px] md:text-[26px] lg:text-[28px] text-primary-blue font-bold leading-[26px] md:leading-8">
					Featured sermons
				</p>
				<p className="text-primary-gray text-sm md:text-base max-w-[650px] mx-auto">
					Take from our diverse array of selected sermons to strengthen your
					spirit and indulge your thinking into the word of God.
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
						<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
							<div className="p-1">
								<Card>
									<CardHeader>
										{/* <Avatar>
											<AvatarImage src="https://github.com/shadcn.png" />
											<AvatarFallback>CN</AvatarFallback>
										</Avatar> */}
									</CardHeader>
									<CardContent className="flex aspect-square items-center justify-center p-6">
										<span className="text-3xl font-semibold">{index + 1}</span>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
};

export default Testimonials;

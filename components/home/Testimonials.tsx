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
			name: "Chidinma Okonkwo",
			country: "Nigeria",
			testimony:
				"Salvation Ministries has been instrumental in shaping my spiritual journey. The powerful worship sessions and insightful sermons have ignited a passion for God in me like never before. I've experienced tremendous growth and transformation since I started attending.",
		},
		{
			avatar: "/testimonial-avatar.png",
			name: "David Okafor",
			country: "Nigeria",
			testimony:
				"Being part of Salvation Ministries has been a life-changing experience for me. The genuine love and sense of community here are unparalleled. I've found a supportive family and a place where I can freely worship and grow in my faith.",
		},
		{
			avatar: "/testimonial-avatar.png",
			name: "Esther Adekunle",
			country: "Nigeria",
			testimony:
				"Salvation Ministries is more than just a church; it's a sanctuary where broken lives are restored and destinies are fulfilled. The teachings have equipped me with practical wisdom and spiritual insight to navigate life's challenges successfully.",
		},
		{
			avatar: "/testimonial-avatar.png",
			name: "John Obi",
			country: "Nigeria",
			testimony:
				"I'm grateful to Salvation Ministries for the profound impact it has had on my life. Through the teachings and fellowship, I've discovered my purpose and experienced divine breakthroughs. It's truly a place of transformation and empowerment.",
		},
		{
			avatar: "/testimonial-avatar.png",
			name: "Grace Eze",
			country: "Nigeria",
			testimony:
				"Salvation Ministries has been my spiritual home for several years now, and it has been a journey filled with blessings and growth. The teachings are practical and relevant, and the atmosphere of worship is uplifting. I'm grateful for this amazing community.",
		},
	];

	return (
		<div className="flex flex-col text-center mb-[100px] max-w-[996px] xl:max-w-7xl mx-auto px-4 lg:px-0">
			<div className="grid gap-[10px] justify-center mb-10">
				<p className="text-primary-blue font-bold text-[24px] lg:text-[30px] xl:text-[36px] leading-[26px] md:leading-9 lg:leading-10 xl:leading-[46px]">
					Testimonies
				</p>
				<p className="text-primary-gray text-[16px] xl:text-[18px] mx-auto md:mx-0 max-w-[500px]">
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
							<div className="p-1 h-full">
								<Card className="h-full">
									<CardHeader className="flex flex-row gap-5 items-end">
										<Avatar className="w-[40px] h-[40px]">
											<AvatarImage src="https://github.com/shadcn.png" />
											<AvatarFallback>CN</AvatarFallback>
										</Avatar>
										<div className="grid justify-start text-start font-bold leading-none gap-1">
											<span className="text-[14px]">{_.name}</span>
											<span>{_.country}</span>
										</div>
									</CardHeader>
									<CardContent className="flex items-center justify-center">
										<span className="text-[14px] text-start">
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

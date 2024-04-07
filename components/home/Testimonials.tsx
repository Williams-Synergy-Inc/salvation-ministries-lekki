"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState, useEffect } from "react";

interface IDataItem {
	testifier_image_url: string;
	testifier_name: string;
	country: string;
	testimonial: string;
}
const Testimonials = () => {
	const [testimonial, setTestimonial] = useState<IDataItem[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://salvation-ministries.up.railway.app/api/v1/hero/testimonies/all"
				);
				if (!response.ok) {
					throw new Error("Failed to fetch data");
				}
				const result = await response.json();
				setTestimonial(result.data);
			} catch (error) {
				setTestimonial([]);
			} finally {
				return;
			}
		};

		fetchData();
	}, []);

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
											<AvatarImage src={`${_.testifier_image_url}`} />
											<AvatarFallback>CN</AvatarFallback>
										</Avatar>
										<div className="grid justify-start text-start font-bold leading-none gap-1">
											<span className="text-[14px]">{_.testifier_name}</span>
											<span>{_.country}</span>
										</div>
									</CardHeader>
									<CardContent className="flex items-center justify-center">
										<span className="text-[14px] text-start">
											{_.testimonial}
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

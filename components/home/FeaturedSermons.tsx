import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import Link from "next/link";

import React from "react";

const FeaturedSermons = () => {
	const sermons = [
		{
			img: "/featured_sermon.png",
			title: "The Importance of Forgiveness",
			by: "Rev, Dr. Olusola",
			link: "https://spotify.com",
		},
		{
			img: "/featured_sermon.png",
			title: "The Importance of Mercy",
			by: "Rev, Dr. Olusola",
			link: "https://spotify.com",
		},
		{
			img: "/featured_sermon.png",
			title: "The Importance of Grace",
			by: "Rev, Dr. Olusola",
			link: "https://spotify.com",
		},
		{
			img: "/featured_sermon.png",
			title: "The Importance of Faith",
			by: "Rev, Dr. Olusola",
			link: "https://spotify.com",
		},
		{
			img: "/featured_sermon.png",
			title: "The Importance of Favor",
			by: "Rev, Dr. Olusola",
			link: "https://spotify.com",
		},
		{
			img: "/featured_sermon.png",
			title: "The Importance of Blessings",
			by: "Rev, Dr. Olusola",
			link: "https://spotify.com",
		},
	];
	return (
		<div className="flex flex-col text-center mb-[100px]">
			<div className="mb-10 grid gap-[20px] justify-center">
				<p className=" text-primary-blue font-bold text-[24px] lg:text-[30px] xl:text-[36px] leading-[26px] md:leading-9 lg:leading-10 xl:leading-[46px]">
					Featured Sermons
				</p>
				<p className="text-primary-gray text-[16px] xl:text-[18px] md:mx-0 max-w-[500px] mx-auto">
					Take from our diverse array of selected sermons to strengthen your
					spirit and indulge your thinking into the word of God.
				</p>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
				{sermons.map((sermon, index) => {
					const { img, title, by, link } = sermon;
					return (
						<Link
							href={link}
							key={index}
							className="w-fit hover:scale-[1.01] transition-all"
						>
							<Card className="border-none shadow-none w-fit">
								<CardHeader className="p-0 mb-2">
									<Image src={img} width={300} height={230} alt={title} />
								</CardHeader>
								<CardContent className="p-0">
									<CardTitle className="text-primary-blue text-[16px] mb-1 font-medium">
										{title}
									</CardTitle>
									<CardDescription className="italic text-[14px]">
										{by}
									</CardDescription>
								</CardContent>
							</Card>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default FeaturedSermons;

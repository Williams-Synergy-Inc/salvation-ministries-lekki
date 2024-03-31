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
			by: "Rev, DR. Olusola",
			link: "https://spotify.com",
		},
		{
			img: "/featured_sermon.png",
			title: "The Importance of Mercy",
			by: "Rev, DR. Olusola",
			link: "https://spotify.com",
		},
		{
			img: "/featured_sermon.png",
			title: "The Importance of Grace",
			by: "Rev, DR. Olusola",
			link: "https://spotify.com",
		},
		{
			img: "/featured_sermon.png",
			title: "The Importance of Faith",
			by: "Rev, DR. Olusola",
			link: "https://spotify.com",
		},
		{
			img: "/featured_sermon.png",
			title: "The Importance of Favor",
			by: "Rev, DR. Olusola",
			link: "https://spotify.com",
		},
		{
			img: "/featured_sermon.png",
			title: "The Importance of Blessings",
			by: "Rev, DR. Olusola",
			link: "https://spotify.com",
		},
	];
	return (
		<div className="flex flex-col text-center mb-[100px]">
			<div className="mb-10">
				<p className="text-[20px] md:text-[26px] lg:text-[28px] text-primary-blue font-bold leading-[26px] md:leading-8 sm:mb-3 uppercase">
					Featured sermons
				</p>
				<p className="text-primary-gray text-base max-w-[650px] mx-auto">
					Take from our diverse array of selected sermons to strengthen your
					spirit and indulge your thinking into the word of God.
				</p>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
				{sermons.map((sermon, index) => {
					const { img, title, by, link } = sermon;
					return (
						<Link href={link} key={index}>
							<Card className="border-none shadow-none">
								<CardHeader className="p-0 mb-2">
									<Image src={img} width={300} height={230} alt={title} />
								</CardHeader>
								<CardContent className="p-0">
									<CardTitle className="text-primary-blue text-base mb-1 font-medium">
										{title}
									</CardTitle>
									<CardDescription className="italic">{by}</CardDescription>
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

"use client"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import Link from "next/link";

import React from "react";
import { useState, useEffect } from "react";
interface IDataItem {
	title: string;
   category: string
   image_url: string
   preacher: string
   link_to_sermon: string
   featured: boolean
}

const FeaturedSermons = () => {
   const [sermons, setsermons] = useState<IDataItem[]>([]);
		useEffect(() => {
			const fetchData = async () => {
				try {
					const response = await fetch(
						"https://salvation-ministries.up.railway.app/api/v1/resources/featured/sermons"
					);
					if (!response.ok) {
						throw new Error("Failed to fetch data");
					}
					const result = await response.json();
					setsermons(result.data);
				} catch (error) {
					setsermons([]);
				} finally {
					return;
				}
			};

			fetchData();
      }, []);


	return (
		<div className="flex flex-col text-center mb-[100px]">
			<div className="mb-10 grid gap-[10px] justify-center">
				<p className=" text-primary-blue font-bold text-[24px] lg:text-[30px] xl:text-[36px] leading-[26px] md:leading-9 lg:leading-10 xl:leading-[46px]">
					Featured Sermons
				</p>
				<p className="text-primary-gray text-[16px] xl:text-[18px] md:mx-0 max-w-[500px] mx-auto mb-5">
					Take from our diverse array of selected sermons to strengthen your
					spirit and indulge your thinking into the word of God.
				</p>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 justify-center items-start">
				{sermons.map((sermon, index) => {
					const { image_url, title, preacher, link_to_sermon } = sermon;
					return (
						<Link
							href={link_to_sermon}
							key={index}
							className="w-fit hover:scale-[1.01] transition-all mx-auto"
						>
							<Card className="border-none shadow-none w-fit">
								<CardHeader className="p-0 mb-2">
									<Image src={image_url} width={300} height={200} alt={title} />
								</CardHeader>
								<CardContent className="p-0">
									<CardTitle className="text-primary-blue text-[16px] mb-1 font-medium">
										{title}
									</CardTitle>
									<CardDescription className="italic text-[14px]">
										{preacher}
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

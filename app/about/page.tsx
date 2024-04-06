"use client"
import { useState, useEffect } from "react";
import RouteHeaderBackground from "@/components/RouteHeaderBackground";
import { aboutUsData } from "@/data";
import { sanitizeHTML } from "@/lib/sanitizeHTML";
interface IDataItem {
	content: string;
}

const page = () => {
   const [sections, setSections] = useState<IDataItem[]>([]);

   useEffect(() => {
			const fetchData = async () => {
				try {
					const response = await fetch(
						"https://salvation-ministries.up.railway.app/api/v1/misc/about-us"
					);
					if (!response.ok) {
						throw new Error("Failed to fetch data");
					}
					const result = await response.json();
					setSections(result.data);
				} catch (error) {
					setSections([]);
				} finally {
					return;
				}
			};

			fetchData();
		}, []);

   const sanitizedContent = sanitizeHTML("content");

	const chidrenContent = (
		<div className="flex flex-col items-center justify-center text-white gap-2 px-5 text-center translate-y-6">
			<h1 className="font-bold text-[24px] md:text-[32px] lg:text-[46px]">
				ABOUT THE CHURCH
			</h1>
			<span className="font-bold text-[16px] md:text-[20px] lg:text-3xl">
				Get to know about the church, our mission, our vision etc.
			</span>
		</div>
	);

	return (
		<div className="mb-20 lg:mb-[120px]">
			<RouteHeaderBackground
				children={chidrenContent}
				image="/about_header.png"
			/>
			<section className="sm:container px-4 max-w-3xl lg:max-w-4xl xl:max-w-[1093px] flex flex-col gap-[35px] lg:gap-[80px] mt-10 lg:mt-20">
				{aboutUsData.map((_, index) => {
					const { id, title, text } = _;
					return (
						<div
							className="grid gap-6 text-center"
							key={`about-${index}.${id}`}
						>
							<p className="font-bold text-xl lg:text-[30px] uppercase text-[#1B1B1B]">
								{title}
							</p>
							<p className="text-[16px] lg:text-[20px] leading-8 text-start">
								{text}
							</p>
							{/* <p
								className="text-[16px] lg:text-[20px] leading-8 text-start"
								dangerouslySetInnerHTML={{ __html: sanitizedContent }}
							/> */}
						</div>
					);
				})}
			</section>
		</div>
	);
};

export default page;

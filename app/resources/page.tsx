"use client";
import { useState, useEffect } from "react";
import Books from "@/components/resources/Books";
import Sermons from "@/components/resources/Sermons";
import RouteHeaderBackground from "@/components/RouteHeaderBackground";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface IDataItem {
	id: string;
	question: string;
	answer: string;
}
const page = () => {
	const [resources, setResources] = useState<IDataItem[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://salvation-ministries.up.railway.app/api/v1/misc/faq/all"
				);
				if (!response.ok) {
					throw new Error("Failed to fetch data");
				}
				const result = await response.json();
				setResources(result.data);
			} catch (error) {
				setResources([]);
			} finally {
				return;
			}
		};

		fetchData();
	}, []);

	const chidrenContent = (
		<div className="flex flex-col items-center justify-center text-white gap-4 px-5 text-center translate-y-5">
			<h1 className="font-bold text-[20px] lg:text-[46px]">Resources</h1>
		</div>
	);
	return (
		<div>
			<RouteHeaderBackground
				children={chidrenContent}
				image={"/resources_header.png"}
			/>

			<section className="">
				<Tabs
					defaultValue="account"
					className="sm:container w-full pt-10 p-4 md:p-[40px] lg:max-w-5xl lg:px-0  flex flex-col gap-10 lg:gap-28 items-center justify-center"
				>
					<TabsList className="flex gap-10 bg-none">
						<TabsTrigger asChild value="books" className="bg-none">
							<Button className="w-[100px] text-[18px]" size={"lg"}>
								Books
							</Button>
						</TabsTrigger>

						<TabsTrigger asChild value="sermons">
							<Button className="w-[100px] text-[18px]" size={"lg"}>
								Sermons
							</Button>
						</TabsTrigger>
					</TabsList>

					<TabsContent className="min-h-[100px] border w-full" value="books">
						<Books />
					</TabsContent>

					<TabsContent className="min-h-[100px] border w-full" value="sermons">
						<Sermons />
					</TabsContent>
				</Tabs>
			</section>
		</div>
	);
};

export default page;

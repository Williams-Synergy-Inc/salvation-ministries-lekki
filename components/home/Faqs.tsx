"use client"
import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useEffect } from "react";


interface IDataItem {
	id: string;
	question: string;
	answer: string;
}

const Faqs = () => {
   const [questions, setQuestions] = useState<IDataItem[]>([]);
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
					setQuestions(result.data);
				} catch (error) {
					setQuestions([]);
				} finally {
					return;
				}
			};

			fetchData();
		}, []);
	return (
		<div className="px-4 sm:container max-w-3xl lg:max-w-4xl py-[50px] md:py-[80px] lg:py-[100px] flex flex-col text-center">
			<div className="mb-5 grid gap-[10px] justify-center">
				<p className=" text-primary-blue font-bold text-[24px] lg:text-[30px] xl:text-[36px] leading-[26px] md:leading-9 lg:leading-10 xl:leading-[46px]">
					Frequently Asked Questions
				</p>
				<p className="text-primary-gray text-[16px] xl:text-[18px] md:mx-0 max-w-[500px] mx-auto mb-5">
					Please reach us at if you cannot fi nd an answer to your question.
				</p>
			</div>

			<Accordion type="single" collapsible className="grid space-y-6 pt-2">
				{questions.map((question, index) => {
					const { id, question: faq, answer } = question;
					return (
						<AccordionItem
							key={index}
							className="bg-gradient-to-b from-[#15009acc] to-[#012173CC] rounded-[10px] p-px shadow-md"
							value={`item-${id}`}
						>
							<div className="bg-white px-5 rounded-[9px]">
								<AccordionTrigger className="font-normal text-start text-[16px] bg-clip-text text-transparent bg-gradient-to-r from-[#16019bcc] to-[#012173CC] h-[70px] dark:text-white">
									{faq}
								</AccordionTrigger>
								<AccordionContent className="text-start mb-5 text-[16px] dark:text-white leading-snug text-[#000000]">
									{answer}
								</AccordionContent>
							</div>
						</AccordionItem>
					);
				})}
			</Accordion>
		</div>
	);
};

export default Faqs;

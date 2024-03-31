import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqData } from "@/data";

const Faqs = () => {
	return (
		<div className="container max-w-3xl lg:max-w-4xl xl:max-w-[1093px] py-[50px] md:py-[80px] lg:py-[100px] flex flex-col text-center">
			<div className="mb-10">
				<p className="text-[20px] md:text-[26px] lg:text-[28px] text-primary-blue font-bold leading-[26px] md:leading-8">
					Frequently Asked Questions
				</p>
				<p className="text-primary-gray text-sm md:text-base max-w-[650px] mx-auto">
					Please reach us at if you cannot fi nd an answer to your question.
				</p>
			</div>

			<Accordion type="single" collapsible className="grid space-y-6 pt-2">
				{FaqData.map((questions, index) => {
					const { id, question, answer } = questions;
					return (
						<AccordionItem
							key={index}
							className="bg-gradient-to-b from-[#0A0048CC] to-[#012173CC] rounded-[10px] p-px shadow-md"
							value={`item-${id}`}
						>
							<div className="bg-white px-5 rounded-[9px]">
								<AccordionTrigger className="font-normal text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#0A0048CC] to-[#012173CC] h-[70px] dark:text-white">
									{question}
								</AccordionTrigger>
								<AccordionContent className="text-start text-xl dark:text-white text-[#3a3a3a]">
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

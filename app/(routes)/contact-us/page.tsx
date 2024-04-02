"use client";
import RouteHeaderBackground from "@/components/RouteHeaderBackground";
import { contactUsData } from "@/data";
import ContactForm from "@/components/contact-us/ContactForm";

const page = () => {
	const chidrenContent = (
		<div className="flex flex-col items-center justify-center text-white gap-2 px-5 text-center translate-y-6">
			<h1 className="font-bold text-[24px] md:text-[32px] lg:text-[46px]">
				Contact Us
			</h1>
		</div>
	);
	return (
		<div className="mb-20 lg:mb-[120px]">
			<RouteHeaderBackground
				children={chidrenContent}
				image={"/contactus_header.png"}
			/>
			<section className="sm:container px-4 md:px-[40px] lg:max-w-4xl xl:max-w-[1093px] flex flex-col gap-20 lg:gap-28 items-center justify-center relative transform -translate-y-[50px] lg:-translate-y-[90px]">
				<div className="flex flex-col md:grid md:grid-cols-2 justify-center items-center text-center gap-[60px]">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253733.60587340518!2d3.25275208671875!3d6.4469618000000075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf73e191994e5%3A0x5fc0b3982da96898!2sSalvation%20Ministries%20Lekki!5e0!3m2!1sen!2sng!4v1712011087211!5m2!1sen!2sng"
						className="w-full h-[350px] md:h-[450px] rounded-2xl"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
					<div>
						{contactUsData.map((_, index) => {
							const { id, title, text } = _;
							return (
								<div
									key={`contact-${index}.${id}`}
									className="grid gap-[8px] mb-4 transform md:translate-y-10 text-[16px] md:text-[18px] md:text-start"
								>
									<span className="font-bold">{title}</span>
									<span className="">{text}</span>
								</div>
							);
						})}
					</div>
				</div>

				<div className="text-center">
					<h2 className="font-bold text-[20px] md:text-[30px] mb-5">Send us message</h2>
					<ContactForm />
				</div>
			</section>
		</div>
	);
};

export default page;

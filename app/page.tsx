import NextLiveService from "@/components/home/NextLiveService";
import HeaderCarousel from "@/components/home/HeaderCarousel";
import Mandate from "@/components/home/Mandate";
import FeaturedSermons from "@/components/home/FeaturedSermons";
import JoinUs from "@/components/home/JoinUs";
import Testimonials from "@/components/home/Testimonials";
import DailyWord from "@/components/home/DailyWord";
import Faqs from "@/components/home/Faqs";

export default function Home() {
	return (
		<>
			<HeaderCarousel />
			<div className="sm:container px-4 md:px-6 max-w-[798px] lg:max-w-5xl xl:max-w-[1093px]">
				<NextLiveService />
				<Mandate />
				<FeaturedSermons />
				<JoinUs />
			</div>
			<Testimonials />
			<DailyWord />
			<Faqs />
		</>
	);
}

import NextLiveService from "@/components/home/NextLiveService";
import HeaderCarousel from "@/components/home/HeaderCarousel";
import Mandate from "@/components/home/Mandate";
import FeaturedSermons from "@/components/home/FeaturedSermons";
import JoinUs from "@/components/home/JoinUs";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
	return (
		<>
			<HeaderCarousel />
			<div className="container max-w-3xl lg:max-w-4xl xl:max-w-5xl">
				<NextLiveService />
            <Mandate />
            <FeaturedSermons />
            <JoinUs />
            <Testimonials />
			</div>
		</>
	);
}

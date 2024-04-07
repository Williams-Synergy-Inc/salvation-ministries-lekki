"use client";
import ServiceForm from "@/app/service-form/page";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const page = () => {
	const router = useRouter();
	const pathname = usePathname();
	return (
		<div>
			<Card className="max-w-[1100px] w-[95dvw] lg:w-[80dvw] h-[98dvh] lg:h-[90dvh] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-scroll fixed z-[60] shadow-2xl rounded-2xl">
				<CardContent className="p-0" id="serviceFormModal">
					{pathname !== "service-form" && (
						<Button
							onClick={() => router.back()}
							size={"icon"}
							variant={"ghost"}
							className="flex gap-2 items-center rounded-full font-bold text-[20px] absolute right-5 top-5"
						>
							<Image src="/Close.png" width={30} height={30} alt="" />
						</Button>
					)}
					<ServiceForm />
				</CardContent>
			</Card>
		</div>
	);
};

export default page;

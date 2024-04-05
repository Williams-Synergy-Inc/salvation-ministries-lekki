"use client";
import ServiceForm from "@/app/service-form/page";
import { Card, CardContent } from "@/components/ui/card";

const page = () => {
	return (
		<div>
         <Card className="max-w-[1100px] w-[95vw] lg:w-[80vw] h-[98vh] lg:h-[90vh] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-scroll fixed z-[100] shadow-2xl rounded-2xl">
            <CardContent>
   				<ServiceForm />
            </CardContent>
			</Card>
		</div>
	);
};

export default page;

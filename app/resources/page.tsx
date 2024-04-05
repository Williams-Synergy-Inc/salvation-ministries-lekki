import Books from "@/components/resources/Books";
import Sermons from "@/components/resources/Sermons";
import RouteHeaderBackground from "@/components/RouteHeaderBackground";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


const page = () => {
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
					className="sm:container p-4 md:p-[40px] lg:max-w-5xl lg:px-0  flex flex-col gap-20 lg:gap-28 items-center justify-center"
				>
					<TabsList>
						<TabsTrigger value="account">
							<Button size={"lg"}>Books</Button>
						</TabsTrigger>
						<TabsTrigger value="password">
							<Button size={"lg"}>Sermons</Button>
						</TabsTrigger>
               </TabsList>

					<TabsContent value="account">
						<Books  />
               </TabsContent>


               <TabsContent value="password">
                  <Sermons />
               </TabsContent>
				</Tabs>
			</section>
		</div>
	);
};

export default page;

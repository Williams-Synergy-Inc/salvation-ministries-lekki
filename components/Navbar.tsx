"use client";
import Image from "next/image";
import Link from "next/link";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";


const Navbar = () => {
   const pathname = usePathname();
	const links = [
		{
			id: 1,
			link: "/",
			title: "Home",
		},
		{
			id: 1,
			link: "/about",
			title: "About Us",
		},
		{
			id: 1,
			link: "/resources",
			title: "Resources",
		},
		{
			id: 1,
			link: "/contact-us",
			title: "Contact Us",
		},
	];
	return (
		<nav className="bg-[#0000005d] backdrop-blur-[3px] rounded-[8px] shadow-sm h-[70px] md:h-[77px] max-w-[90%] fixed top-3 left-1/2 transform -translate-x-1/2 w-full flex justify-center items-center z-[49]">
			<div className="w-full px-5 flex justify-between items-center">
				<Link href="/" className="w-[90px] h-[50px]">
					<Image
						src="/logo.png"
						width={100}
						height={100}
						className="w-full h-full"
						alt="Logo"
					/>
				</Link>

				<div className="md:hidden">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant="menu"
								size={"icon"}
								className="outline-none ring-transparent bg-none hover:bg-none"
							>
								<Image src="/menu.svg" width={25} height={25} alt="menu" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="md:hidden w-56 transform -translate-x-[15%]">
							{links.map((_, index) => {
								const { id, title, link } = _;
								return (
									<DropdownMenuGroup key={id}>
										<DropdownMenuItem asChild key={`link-${index}.${id}`}>
											<Link
												className={`border-black items-center hover:bg-gray-100 px-3 mx-1 rounded-lg  h-[45px] ${
													pathname === link ? "border-b-[3px]" : ""
												}`}
												href={link}
											>
												<span className="text-black text-xl">{title}</span>
											</Link>
										</DropdownMenuItem>
										<DropdownMenuSeparator />
									</DropdownMenuGroup>
								);
							})}
							<DropdownMenuGroup>
								<DropdownMenuItem className="">
									<Button
										variant="default"
										size={"lg"}
										className="flex w-full"
										asChild
										disabled={pathname === "service-form" ? true : false}
									>
										<Link href="/service-form">Service Form</Link>
									</Button>
								</DropdownMenuItem>
							</DropdownMenuGroup>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>

				<div className="hidden md:flex gap-8 lg:gap-16 items-center">
					{links.map((_, index) => {
						const { id, title, link } = _;
						return (
							<Link
								key={`link-${index}.${id}`}
								className={`px-2 border-white hover:border-b-2 ${
									pathname === link ? "border-b-2" : ""
								}`}
								href={link}
							>
								<span className="text-[16px] font-medium text-white h-[40px]">
									{title}
								</span>
							</Link>
						);
					})}
				</div>

				<Button
					variant="default"
					size={"lg"}
					className="hidden md:flex"
					asChild
					disabled={pathname !== "/service-form"}
				>
					<Link href="/service-form">Service Form</Link>
				</Button>
			</div>
		</nav>
	);
};

export default Navbar;

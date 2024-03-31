"use client";
import Image from "next/image";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
		<nav className="bg-[#CFD0D980] backdrop-blur-[2px] rounded-[8px] shadow-sm h-[60px] md:h-[77px] max-w-[90%] md:max-w-[85%] fixed top-8 left-1/2 transform -translate-x-1/2 w-full flex justify-center items-center z-10">
			<div className="w-[90%] flex justify-between items-center">
				<Link href="/">
					<Image src="/logo.png" width={100} height={100} alt="Logo" />
				</Link>

				<div className="md:hidden">
					<DropdownMenu>
						<DropdownMenuTrigger>
							<Image src="/menu.svg" width={25} height={25} alt="menu" />
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							{links.map((_, index) => {
								const { id, title, link } = _;
								return (
									<DropdownMenuItem key={`link-${index}.${id}`}>
										<Link
											className={`text-black text-lg px-2 h-[25px] border-black hover:border-b-2 ${
												pathname === link ? "border-b-2" : ""
											}`}
											href={link}
										>
											{title}
										</Link>
									</DropdownMenuItem>
								);
							})}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>

				<div className="hidden md:flex gap-10 items-center">
					{links.map((_, index) => {
						const { id, title, link } = _;
						return (
							<Link
								key={`link-${index}.${id}`}
								className={`text-white text-lg px-2 h-[25px] border-white hover:border-b-2 ${
									pathname === link ? "border-b-2" : ""
								}`}
								href={link}
							>
								{title}
							</Link>
						);
					})}
					{/* <Link href="/about">About</Link>
					<Link href="/resources">Resources</Link>
					<Link href="/contact-us">Contact Us</Link> */}
				</div>

				<Button variant="default" className="hidden md:flex">
					Service Form
				</Button>
			</div>
		</nav>
	);
};

export default Navbar;

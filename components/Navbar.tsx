import Image from "next/image";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="bg-[#CFD0D980] rounded-[8px] shadow-sm h-[60px] md:h-[77px] max-w-[90%] md:max-w-[85%] fixed top-8 left-1/2 transform -translate-x-1/2 w-full flex justify-center items-center">
			<div className="w-[90%] flex justify-between items-center">
				<div>
					<Image src="/logo.svg" width={80} height={40} alt="Logo" />
				</div>

				<div className="md:hidden">
					<DropdownMenu>
						<DropdownMenuTrigger>
							<Image src="/menu.svg" width={25} height={25} alt="menu" />
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuItem>
								<Link href="/">Home</Link>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Link href="/">About</Link>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Link href="/">Resources</Link>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Link href="/">Contact Us</Link>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Button variant="default">Service Form</Button>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>

				<div className="hidden md:flex gap-10 items-center">
						<Link href="/">Home</Link>
						<Link href="/">About</Link>
						<Link href="/">Resources</Link>
						<Link href="/">Contact Us</Link>
				</div>

				<Button variant="default" className="hidden md:flex">
					Service Form
				</Button>
			</div>
		</nav>
	);
};

export default Navbar;
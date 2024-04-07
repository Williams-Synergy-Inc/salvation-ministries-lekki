import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="w-screen bottom-0 bg-[#2F2F2F] flex flex-col items-center p-5 pt-[40px] md:px-[40px] text-white">
			<div className="flex flex-col md:flex-row md:justify-between items-center gap-10 md:gap-0 mb-10 w-full md:max-w-[1060px]">
				<Link href={"/"} className="flex justify-center items-center">
					<Image src="/big-logo.svg" width={150} height={100} alt="logo" />
				</Link>

				<div className="flex justify-center items-center gap-5 max-w-[300px]">
					<Image src="/location.svg" width={20} height={20} alt="" />
					<Link
						href="https://maps.app.goo.gl/74V75M7VQXf22h2q7"
						className="text-[14px] md:text-[16px]"
					>
						Salvation Ministries Scintilla center Km 22 Lekki, expresssway,
						Lagos
					</Link>
				</div>

				<div className="flex md:grid lg:flex gap-10 lg:gap-20 justify-between items-center">
					<div className="grid gap-3">
						<span className="text-[14px] md:text-[16px]">Socials</span>
						<div className="flex gap-5">
							<Link href="https://www.instagram.com/smhosglobal/">
								<Image
									src="instagram.svg"
									width={20}
									height={20}
									alt="instagram"
								/>
							</Link>
							<Link href="https://web.facebook.com/smhosglobal">
								<Image
									src="facebook.svg"
									width={20}
									height={20}
									alt="facebook"
								/>
							</Link>
							<Link href="https://twitter.com/smhosglobal?t=BPTkuKvRDZA6kxnLpH_HCQ&s=09">
								<Image
									src="twitter.svg"
									width={20}
									height={20}
									alt="X (formerly twitter)"
								/>
							</Link>
						</div>
					</div>

					<div className="grid gap-3">
						<Link
							className="flex items-center gap-5"
							href={`tel:+234814170417`}
						>
							<span className="hidden sm:block text-[14px] md:text-[16px]">
								Call Us
							</span>
							<Image src="phone.svg" width={20} height={15} alt="call us" />{" "}
							+234814170417
						</Link>
						<Link
							className="flex items-center gap-5"
							href={`mailto:info@smlekki.com`}
						>
							<span className="hidden sm:block text-[14px] md:text-[16px]">
								Email Us
							</span>
							<Image
								src="mail.svg"
								width={20}
								height={10}
								className="h-[15px]"
								alt="instagram"
							/>{" "}
							info@smlekki.com
						</Link>
					</div>
				</div>
			</div>

			<small className="text-center">
				SALVATION MINISTRIES &copy; 2024. ALL RIGHTS RESERVED
			</small>
		</footer>
	);
};

export default Footer;

import Image from "next/image";
import React from "react";

const Footer = () => {
	return (
		<footer className="w-screen bottom-0 bg-[#2F2F2F] flex flex-col items-center p-5 pt-[40px] md:px-[40px] text-white">
			<div className="flex flex-col md:flex-row md:justify-between items-center gap-10 md:gap-0 mb-10 w-full md:max-w-[1060px]">
				<div className="flex justify-center items-center">
					<Image src="/big-logo.svg" width={150} height={100} alt="logo" />
				</div>

				<div className="flex justify-center items-center gap-5 max-w-[270px]">
					<Image src="/location.svg" width={20} height={20} alt="" />
					<p className="">
						Salvation Ministries Scintilla center Km 22 Lekki, expresssway,
						Lagos
					</p>
				</div>

				<div className="flex md:grid lg:flex gap-10 lg:gap-20 justify-between items-center">
					<div className="grid gap-3">
						<span>Socials</span>
						<div className="flex gap-5">
							<Image
								src="instagram.svg"
								width={20}
								height={20}
								alt="instagram"
							/>
							<Image
								src="facebook.svg"
								width={20}
								height={20}
								alt="instagram"
							/>
							<Image src="twitter.svg" width={20} height={20} alt="instagram" />
						</div>
					</div>
					<div className="grid gap-3">
						<div className="flex gap-5">
							<Image src="phone.svg" width={20} height={20} alt="instagram" />{" "}
							+234814170417
						</div>
						<div className="flex gap-5">
							<Image src="mail.svg" width={20} height={15} alt="instagram" />{" "}
							info@smlekki.com
						</div>
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

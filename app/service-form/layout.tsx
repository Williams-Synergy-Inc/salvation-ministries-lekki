export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="px-5 grid gap-3 mt-[100px] md:mt-[120px] sm:container max-w-[640px] lg:max-w-[800px]">
			<h1 className="text-[24px] font-bold">Service Group Form</h1>
			{children}
		</div>
	);
}

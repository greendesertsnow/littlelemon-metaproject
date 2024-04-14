import { Provider } from "@/components/provider";
import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { menuItems } from "@/lib/data";
import localFont from "next/font/local";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Provider attribute="class" defaultTheme="system" enableSystem>
					<main className="little-lemon text-foreground ">
						<Navigation />
						{children}
						<Footer />
					</main>
				</Provider>
			</body>
		</html>
	);
}

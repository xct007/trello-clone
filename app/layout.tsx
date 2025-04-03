import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";

import { Navbar } from "@/components/navbar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default:
			"Capture, organize, and tackle your to-dos from anywhere | Trello",
		template: "%s | Trello",
	},
	description:
		"Make the impossible, possible with Trello. The ultimate tool to boost your productivity. Escape the clutter and chaos—stay efficient with Inbox, Boards, and Planner from anywhere, even on mobile.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={geistSans.variable} suppressHydrationWarning>
			<body>
				<Provider
					defaultTheme="light"
					themes={["light"]}
					enableColorScheme={false}
				>
					<Navbar />
					{children}
				</Provider>
			</body>
		</html>
	);
}

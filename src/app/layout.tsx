
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { ThemeProvider } from "next-themes";
import { color } from "framer-motion";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Sachaa.fr",
	description: "sacha alt's website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				data-theme='dark'
				className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
			>

					<Navbar />
					<Hero />
					{children}

			</body>
		</html>
	);
}

"use client";
import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "@/components/Navbar";
import Manifesto from "@/components/Manifesto";

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<Manifesto/>
		</>
	);
}

"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";


type NavElement = { title: string; url: string };

export default function Navbar() {
	const pathname = usePathname();
	console.log(pathname);
	const navElements: NavElement[] = [
		{ title: "Home", url: "/" },
		{ title: "Photography", url: "/photography" },
		{ title: "Music", url: "/music" },
	];

	const [activePage, setActivePage] = useState(pathname)

	function elementDisplay(element: NavElement, index: number) {
		return (
			<div key={index} className='flex items-center'>
				<Link
					href={element.url}
					className={`font-mono relative group ${
						activePage === element.url
							? "text-white hover:text-secondary"
							: "text-white/50 hover:text-secondary transition-colors"
					}`}
					onClick={() => setActivePage(element.url)}
				>
					{element.title}
					<span
						className={`absolute bottom-[-4px] left-0 h-[2px] shadow-[0_0_10px_rgba(255,255,255,0.7)] transition-all duration-300 ease-in-out ${
							activePage === element.url
								? "w-4 opacity-100 bg-white/70 group-hover:bg-secondary"
								: "w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 bg-secondary"
						}`}
					></span>
				</Link>
				{index < navElements.length - 1 && (
					<div className='ml-5 h-4 w-px bg-white/20'></div>
				)}
			</div>
		);
	}

	return (
		<div className='fixed top-0 w-screen z-2'>
			<div className='flex w-full justify-between p-4 sm:px-10 align-middle'>
				<div className='hidden md:inline font-mono text-2xl self-center w-40'>
					sachaa.fr
				</div>
				<nav className='backdrop-blur-xl bg-white/5 rounded-2xl shadow-[0_8px_32px_0_rgba(231,238,235,0.2)] border border-white/20 flex items-center justify-between px-8 py-4 w-full sm:w-auto gap-5'>
					{navElements.map((element, index) => elementDisplay(element, index))}
				</nav>
				<div className='fixed bottom-5 right-5 self-center space-x-8 md:relative md:flex md:bottom-auto md:right-auto sm:w-40'>
					<Link
						href='https://github.com/Blackers33'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaGithub className='text-white text-3xl hover:text-gray-500 ' />
					</Link>
					<Link
						href='https://www.linkedin.com/in/sachaaltaber/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaLinkedin className='text-white text-3xl hover:text-blue-600' />
					</Link>
						{/* <ThemeToggle /> */}
				</div>
			</div>
		</div>
	);
}

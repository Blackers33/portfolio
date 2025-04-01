import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type NavElement = { title: string; url: Url };

export default function Navbar() {
	const navElements: NavElement[] = [
		{ title: "Home", url: "/#" },
		{ title: "Photography", url: "/photography" },
		{ title: "Music", url: "/music" },
	];

	const activePage: string = "Home";

	function elementDisplay(element: NavElement, index: number) {
		return (
			<div className='flex items-center'>
				<Link
					href={element.url}
					className={`font-mono pr-5 relative group ${
						activePage === element.title
							? "text-white"
							: "text-white/50 hover:text-secondary transition-colors"
					}`}
				>
					{element.title}
					<span
						className={`absolute bottom-[-4px] left-0 h-[2px] shadow-[0_0_10px_rgba(255,255,255,0.7)] transition-all duration-300 ease-in-out ${
							activePage === element.title
								? "w-4 opacity-100 bg-white/70"
								: "w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 bg-secondary"
						}`}
					></span>
				</Link>
				
			</div>
		);
	}

	return (
		<div className='fixed top-0 w-screen z-2'>
			<div className='flex w-full justify-between p-4'>
				<div className='hidden md:inline font-mono text-2xl self-center'>
					sachaa.fr
				</div>
				<nav className='backdrop-blur-xl bg-white/5 rounded-2xl shadow-[0_8px_32px_0_rgba(231,238,235,0.2)] border border-white/20 flex items-center justify-between px-8 py-4 w-full sm:w-auto gap-5'>
					{navElements.map((element, index)=> elementDisplay(element, index))}
				</nav>
				<div className='hidden md:flex self-center space-x-8 '>
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
				</div>
			</div>
		</div>
	);
}

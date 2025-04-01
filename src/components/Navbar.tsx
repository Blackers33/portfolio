import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type NavElement = { title: String, url : String}

export default function Navbar() {


    const navElements: NavElement[] = [
			{ title: "Home", url: "/#" },
			{ title: "Photography", url: "/photography" },
			{ title: "Music", url: "/music" },
		];

	const activePage: string = "home";

	return (
		<div className='fixed top-0 w-screen z-2'>
			<div className='flex w-full justify-between p-4'>
				<div className='hidden md:inline font-mono text-2xl self-center'>
					sachaa.fr
				</div>
				<nav className='backdrop-blur-xl bg-white/5 rounded-2xl shadow-[0_8px_32px_0_rgba(231,238,235,0.2)] border border-white/20 flex items-center justify-between px-8 py-4 w-full sm:w-auto gap-5'>
					<div className='flex items-center'>
						<Link
							href='/#'
							className={`font-mono pr-5 relative group ${
								activePage === "home"
									? "text-white"
									: "text-white/50 hover:text-white transition-colors"
							}`}
						>
							Home
							<span
								className={`absolute bottom-[-4px] left-0 h-[2px] bg-white/70 shadow-[0_0_10px_rgba(255,255,255,0.7)] transition-all duration-300 ease-in-out ${
									activePage === "home"
										? "w-4 opacity-100"
										: "w-0 opacity-0 group-hover:w-4 group-hover:opacity-100"
								}`}
							></span>
						</Link>
						<div className='h-4 w-px bg-white/20'></div>
					</div>

					<div className='flex items-center'>
						<Link
							href='/pricing'
							className={`font-mono pr-5 relative group ${
								activePage === "photography"
									? "text-white"
									: "text-white/50 hover:text-secondary transition-colors"
							}`}
						>
							Photography
							<span
								className={`absolute bottom-[-4px] left-0 h-[2px] shadow-[0_0_10px_rgba(255,255,255,0.7)] transition-all duration-300 ease-in-out ${
									activePage === "photography"
										? "w-4 opacity-100 bg-white/70"
										: "w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 bg-secondary"
								}`}
							></span>
						</Link>
						<div className='h-4 w-px bg-white/20'></div>
					</div>

					<Link
						href='/about'
						className={`font-mono relative group ${
							activePage === "music"
								? "text-white"
								: "text-white/50 hover:text-white transition-colors"
						}`}
					>
						Music
						<span
							className={`absolute bottom-[-4px] left-0 h-[2px] bg-white/70 shadow-[0_0_10px_rgba(255,255,255,0.7)] transition-all duration-300 ease-in-out ${
								activePage === "music"
									? "w-4 opacity-100"
									: "w-0 opacity-0 group-hover:w-4 group-hover:opacity-100"
							}`}
						></span>
					</Link>
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

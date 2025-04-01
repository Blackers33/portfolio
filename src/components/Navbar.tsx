import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
	return (
		<div className='fixed top-0 w-screen z-1'>
			<div className='flex w-full justify-between p-4'>
				<div className='hidden md:inline font-mono text-2xl self-center'>
					sachaa.fr
				</div>
				<nav className='backdrop-blur-xl bg-white/5 rounded-2xl shadow-[0_8px_32px_0_rgba(231,238,235,0.2)] border border-white/20 flex items-center justify-between px-8 py-4 w-full sm:w-auto'>
					<div className='flex items-center gap-x-8 gap-y-3'>
						<div className='flex items-center gap-x-6 gap-y-2'>
							<Link
								href='/features'
								className='text-white/50 hover:text-white transition-colors font-mono'
							>
								Home
							</Link>
							<Link
								href='/pricing'
								className='text-white/50 hover:text-white transition-colors font-mono'
							>
								Photography
							</Link>
							<Link
								href='/about'
								className='text-white/50 hover:text-white transition-colors font-mono'
							>
								Music
							</Link>
						</div>
					</div>
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

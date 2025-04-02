"use client";
import Hero from "../components/Hero";
import Navbar from "@/components/Navbar";
import Manifesto from "@/components/Manifesto";
import Portfolio from "@/components/Portfolio";
import ContactForm from "@/components/ContactForm";

export default function Home() {
	return (
		<>
			<div className='absolute inset-0 flex flex-col items-center justify-end text-center px-4 my-100 z-1'>
				<h1 className='text-4xl sm:text-5xl lg:text-6xl font-title uppercase text-white'>
					Sacha Altaber
				</h1>
				<p className='mt-6 mb-20 text-lg sm:text-xl text-gray-300'>
					Développeur web fullstack React, React Native, NextJS & Node.
				</p>
				<div className='space-x-8'>
					<div className='relative inline-flex  group'>
						<div className='absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-secondary  to-primary rounded-xl group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'></div>
						<a
							href='#'
							title='Get quote now'
							className='relative inline-flex items-center justify-center px-8 py-3.5 text-lg font-bold text-white transition-all duration-200 bg- font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'
							role='button'
						>
							Portfolio
						</a>
					</div>
					<div className='relative inline-flex  group'>
						<div className='absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'></div>
						<a
							href='#'
							title='Get quote now'
							className='relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'
							role='button'
						>
							Contact
						</a>
					</div>
				</div>
			</div>
			<div className='bg-background px-8 lg:px-80'>
				<Manifesto />
				<Portfolio />
				<ContactForm/>
			</div>
		</>
	);
}

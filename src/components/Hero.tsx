import Image from "next/image";

export default function Hero() {
	return (
		<div className='h-screen w-screen'>
			<div className='relative h-[705px]'>
				<Image
					src='/website_hero.png'
					alt='Hero Background'
					fill={true}
					quality={100}
					objectFit='cover'
				/>
			</div>
			<div className='absolute inset-0 flex flex-col items-center justify-center text-center px-4'>
				<h1 className='text-4xl sm:text-5xl lg:text-6xl font-title uppercase'>
					Sacha Altaber
				</h1>
				<p className='mt-4 text-lg sm:text-xl text-gray-300'>
					Développeur web fullstack React, React Native, NextJS & Node.
				</p>
				<a
					href='#'
					className='mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition'
				>
					Get Started
				</a>
			</div>
		</div>
	);
}

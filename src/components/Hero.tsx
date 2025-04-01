import Image from "next/image";

export default function Hero() {
	return (
		<div className='relative h-[705px] w-screen'>
			<div className='absolute inset-0 flex flex-col items-center justify-end text-center px-4 m-10 z-1'>
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
			<Image
				className='-z-2'
				src='/hero_bg.png'
				alt='Hero Background'
				fill={true}
				quality={100}
				objectFit='cover'
			/>

			<div className='fixed top-0 w-screen h-[705px] justify-center flex -z-1'>
				<Image
					src='/hero_stars.svg'
					alt='Hero Background'
					fill={true}
					quality={100}
					objectFit='cover'
				/>
			</div>
			<div className='absolute bottom-0 w-screen h-[150px] justify-center flex bg-gradient-to-t from-background to-transparent'></div>
		</div>
	);
}

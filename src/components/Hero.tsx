import Image from "next/image";

export default function Hero() {
	return (
		<div className='relative h-[705px]'>
			
			<Image
				className='-z-2'
				src='/hero_bg.png'
				alt='Hero Background'
				fill={true}
				quality={100}
				objectFit='cover'
			/>

			<div className='fixed top-0 w-full h-[705px] justify-center flex -z-1'>
				<Image
					src='/hero_stars.svg'
					alt='Hero Background'
					fill={true}
					quality={100}
					objectFit='cover'
				/>
			</div>
			<div className='absolute bottom-0 w-full h-[150px] justify-center flex bg-gradient-to-t from-background to-transparent'></div>
		</div>
	);
}

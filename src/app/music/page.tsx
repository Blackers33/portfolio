import { FaYoutube, FaSoundcloud } from "react-icons/fa";
import { FaS } from "react-icons/fa6";

export default function Home() {
	return (
		<>
			<div className='absolute inset-0 flex flex-col items-center justify-end text-center px-4 my-80 z-1'>
				<h1 className='text-3xl sm:text-4xl lg:text-5xl font-title uppercase text-white'>
					Music
				</h1>
				<p className='leading-relaxed mt-6 sm:mb-20 text-lg sm:text-xl text-gray-300 sm:px-50'>
					Un regroupement non exhaustif de musiques & sons produis au fur et à
					mesure des années. Différents logiciels et matériels sont utilisés;
					principalement Ableton Live mais aussi Propellerheads Reason. Divers
					synthés : Access Virus C, Boog Model D et Arturia Polybrute.
					<br />
					Des collaborations avec d'autres artistes, des jams...
					<br />
					Les vidéos sont créées et éditées par moi même avec Adobe Premiere Pro
					et After Effects.
				</p>
			</div>
			<div className='bg-background mb-20'>
				<div className='space-x-5 sm:space-x-30 flex justify-center mb-20'>
					<div className='relative inline-flex  group'>
						<div className='absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'></div>
						<a
							href='https://www.youtube.com/@CanisCanem'
							title='Youtube'
							className='group-hover:text-orange-400 relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'
							role='button'
						>
							<FaSoundcloud className='-ml-3 mr-3 ' />
							Soundcloud
						</a>
					</div>
					<div className='relative inline-flex  group'>
						<div className='absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'></div>
						<a
							href='https://soundcloud.com/kaniskanem/'
							title='Soundcloud'
							className='group-hover:text-red-500/80 relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'
							role='button'
						>
							<FaYoutube className='-ml-3 mr-3 ' />
							Youtube
						</a>
					</div>
				</div>
				<div className='flex flex-col items-center gap-30 p-4'>
					<iframe
						className='w-full sm:w-[560px] h-[315px]'
						src='https://www.youtube.com/embed/Ryz742QBAwg'
						title='YouTube video player'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					></iframe>
					<iframe
						className='w-full sm:w-[560px] h-[315px]'
						src='https://www.youtube.com/embed/YR9tftOQr0Y'
						title='YouTube video player'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					></iframe>
					<iframe
						className='w-full sm:w-[560px] h-[315px]'
						src='https://www.youtube.com/embed/-ow9RcvZia8'
						title='YouTube video player'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					></iframe>
					<iframe
						className='w-full sm:w-[560px] h-[315px]'
						allow='autoplay'
						src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1255486768&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
					></iframe>
					<iframe
						className='w-full sm:w-[560px] h-[315px]'
						allow='autoplay'
						src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2006338148&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
					></iframe>
					Pour le reste, rendez vous sur Youtube ou Soundcloud en cliquant sur
					les liens ci dessus !
				</div>
			</div>
		</>
	);
}

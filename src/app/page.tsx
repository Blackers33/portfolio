import Portfolio from "@/components/home/Portfolio";
import ContactForm from "@/components/home/ContactForm";
import { FaDownload } from "react-icons/fa";

export default function Home() {
	return (
		<>
			<div className='absolute inset-0 flex flex-col items-center justify-center text-center w-full h-full z-1'>
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
							href='cv.pdf'
							title='Portfolio'
							className='relative inline-flex items-center justify-center pr-8 pl-13 py-3.5 text-lg font-bold text-white transition-all duration-200 bg- font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'
							role='button'
						>
							<FaDownload className='absolute left-5' />
							CV
						</a>
					</div>
					<div className='relative inline-flex  group'>
						<div className='absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'></div>
						<a
							href='#contact'
							title='Contact'
							className='relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'
							role='button'
						>
							Contact
						</a>
					</div>
				</div>
			</div>
			<div className='bg-background px-2 lg:px-80'>
				<div className='space-y-4 px-4 text-lg sm:text-xl leading-relaxed mb-40'>
					<p className='mb-8'>
						Après une carrière dans les secteurs des télécommunications, du
						réseau et de l’audiovisuel, j’ai pris une décision importante : me
						lancer dans le développement web, une discipline qui me passionne
						profondément. Ce changement de parcours n’a pas seulement marqué une
						transition professionnelle, mais également une évolution naturelle
						de mes compétences techniques et de ma capacité à résoudre des
						problèmes de manière créative.
					</p>
					<p className='mb-8'>
						Mon expérience variée m’a permis d’acquérir une perspective unique
						dans le domaine du développement. Ayant travaillé dans des
						environnements technologiques divers, j’ai développé une grande
						polyvalence et une compréhension globale des interactions entre
						différents systèmes. Cette capacité d’adaptation me permet d’aborder
						les défis du développement sous plusieurs angles et de trouver des
						solutions innovantes.
					</p>
				</div>
				<section id='portfolio'>
					<Portfolio />
				</section>
				<section id='contact'>
					<ContactForm />
				</section>
			</div>
		</>
	);
}



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
							href='#portfolio'
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
							href='#contact'
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
				<div className='space-y-4 text-lg leading-relaxed mb-40'>
					<p className='mb-8'>
						Après une carrière dans les secteurs des télécommunications, du
						réseau et de l’audiovisuel, j’ai pris une décision importante : me
						lancer dans le développement informatique, une discipline qui me
						passionne profondément. Ce changement de parcours n’a pas seulement
						marqué une transition professionnelle, mais également une évolution
						naturelle de mes compétences techniques et de ma capacité à résoudre
						des problèmes de manière créative.
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
					<p className='mb-8'>
						Les compétences que j’ai développées au cours de mes précédents
						rôles – qu’il s’agisse de résoudre des problèmes complexes en réseau
						ou de gérer des projets audiovisuels – se révèlent précieuses dans
						mon travail de développeur. Je mets à profit non seulement mes
						connaissances en programmation, mais aussi :
					</p>

					<ul className='list-disc pl-5 space-y-2 mb-8'>
						<li>
							Des compétences en communication, essentielles pour collaborer
							avec des équipes pluridisciplinaires
						</li>
						<li>
							Une approche centrée sur l’utilisateur, axée sur la compréhension
							du besoin.
						</li>
						<li>
							Une compréhension approfondie des infrastructures technologiques,
							permettant de concevoir des applications robustes et intégrées
						</li>
					</ul>

					<p className='mb-8'>
						Mon parcours, qui m’a conduit des télécommunications au
						développement informatique, témoigne de mon engagement envers
						l’apprentissage continu et ma capacité à relever de nouveaux défis.
						Je suis enthousiaste à l’idée d’apporter ce mélange unique
						d’expérience et de passion à des projets innovants, en créant des
						solutions qui unissent différents domaines technologiques.
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

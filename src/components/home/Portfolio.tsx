"use client"
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import rawProjects from "../../data/projects.json";
import { ProjectCard, ProjectCardProps } from "./ProjectCard";

const projects: ProjectCardProps[] = rawProjects //typage TS

export default function Portfolio() {
	const [index, setIndex] = useState(-1);

	return (
		<>
			<div className='mb-40'>
				<div className='text-3xl sm:text-4xl lg:text-5xl font-title mb-20'>
					Portfolio
				</div>

				<div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8'>
					{projects.map((project, index) => (
						<ProjectCard
							key={project.title}
							{...project}
							index={index}
							onClick={() => setIndex(index)}
						/>
					))}
					D'autres projets sont en cours et à venir...
				</div>
			</div>
			<Lightbox
				slides={projects.map((project) => ({
					src: project.image,
					title: project?.title || "",
				}))}
				open={index >= 0}
				index={index}
				close={() => setIndex(-1)}
				carousel={{ finite: true }}
				render={{
					buttonPrev: () => null,
					buttonNext: () => null,
				}}
			/>
		</>
	);
}

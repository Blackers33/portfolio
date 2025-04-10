"use client"
import React, { useState } from "react";
import { ProjectCard, ProjectCardProps } from "./ProjectCard";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const projects: ProjectCardProps[] = [
	{
		title: "foodapp",
		description: "A responsive online store built with React and Node.jsz",
		image:
			"https://raw.githubusercontent.com/Blackers33/foodapp/refs/heads/main/screenshot.png",
		tags: ["React", "Node.js", "MongoDB", "Stripe"],
		githubUrl: "https://github.com/johndoe/ecommerce",
		demoUrl: "https://ecommerce-demo.example.com",
	},
	{
		title: "notesapp",
		description:
			"Application de prise de notes avec customisation des notes et stockage sur MongoDB",
		image:
			"https://github.com/Blackers33/notesapp/blob/main/preview.png?raw=true",
		tags: ["TypeScript", "Shadcn", "MongoDB", "Next.js"],
		githubUrl: "https://github.com/Blackers33/notesapp/",
		demoUrl: "https://notesapp-five-gamma.vercel.app/",
	},
	{
		title: "Cinéfilms",
		description: "Productivity tool with drag-and-drop functionality",
		image:
			"https://raw.githubusercontent.com/Blackers33/cinefilms/refs/heads/main/cinefilms_preview.png",
		tags: ["React Native", "Express", "MongoDB", "Node.js"],
		githubUrl: "https://github.com/johndoe/task-manager",
		demoUrl: "https://tasks-demo.example.com",
	},
];

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

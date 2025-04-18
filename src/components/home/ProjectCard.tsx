"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export interface ProjectCardProps {
	title: string;
	description: string;
	image: string;
	tags: string[];
	githubUrl?: string;
	demoUrl?: string;
	index?: number;
	onClick?: () => void;
}

export function ProjectCard({
	title,
	description,
	image,
	tags,
	githubUrl,
	demoUrl,
	index = 0,
	onClick
}: ProjectCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			viewport={{ once: true }}
			className='group'
		>
			<Card className='bg-gray-900/60 backdrop-blur-sm border-primary/50 overflow-hidden h-full flex flex-col '>
				<div className='relative overflow-hidden -mt-6' onClick={onClick}>
					<div className='absolute inset-0' />
					<img
						src={image || "/placeholder.svg"}
						alt={title}
						className='w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110'
					/>
				</div>
				<CardHeader>
					<CardTitle className='text-blue-300 text-2xl'>{title}</CardTitle>
					<CardDescription className='text-gray-400 text-md'>
						{description}
					</CardDescription>
				</CardHeader>
				<CardContent className='flex flex-wrap gap-2'>
					{tags.map((tag) => (
						<Badge
							key={tag}
							variant='secondary'
							className='bg-blue-400/40 text-blue-300 hover:bg-blue-900/50'
						>
							{tag}
						</Badge>
					))}
				</CardContent>
				<CardFooter className='mt-auto pt-2'>
					<div className='flex gap-2'>
						<Button
							size='sm'
							variant='ghost'
							className='text-blue-400 hover:text-blue-300 hover:bg-blue-950/30'
							asChild
						>
							{githubUrl && <Link href={githubUrl} target='_blank' rel='noopener noreferrer'>
								<Github className='w-4 h-4 mr-1' />
								Code
							</Link>}
						</Button>
						<Button
							size='sm'
							variant='ghost'
							className='text-blue-400 hover:text-blue-300 hover:bg-blue-950/30'
							asChild
						>
							{demoUrl && <Link href={demoUrl} target='_blank' rel='noopener noreferrer'>
								<ExternalLink className='w-4 h-4 mr-1' />
								Demo
							</Link>}
						</Button>
					</div>
				</CardFooter>
			</Card>
		</motion.div>
	);
}

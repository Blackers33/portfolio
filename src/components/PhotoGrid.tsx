"use client";
// inspired by tom is loading
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

interface PhotoGridProps {
	title: string;
	photos: {
		asset_id: number;
		url: string;
		context?: { caption?: string; alt?: string };
		filename: string;
		format: string;
	}[];
}

function PhotoGrid({ title, photos }: PhotoGridProps) {
	const [index, setIndex] = useState(-1);

	return (
		<>
			<div className='container mx-auto p-4 '>
				<span className='font-title text-2xl'>{title}</span>
				<div className='columns-2 md:columns-3 2xl:columns-4 gap-4 mt-10'>
					<>
						{photos.map((photo, index) => (
							<ImageItem
								key={photo.asset_id}
								id={photo.asset_id}
								url={
									"https://res.cloudinary.com/" +
									process.env.NEXT_PUBLIC_CLOUD_NAME +
									"/image/upload/w_400/" +
									photo.filename +
									"." +
									photo.format
								}
								title={photo.context?.caption || ""}
								index={index}
								onClick={() => setIndex(index)}
							/>
						))}
					</>
				</div>
			</div>
			<Lightbox
				slides={photos.map((photo) => ({
					src: photo.url,
					title: photo.context?.alt || "",
				}))}
				open={index >= 0}
				index={index}
				close={() => setIndex(-1)}
				plugins={[Fullscreen, Slideshow, Zoom]}
			/>
		</>
	);
}

interface ImageItemProps {
	id: number;
	url: string;
	title: string;
	index: number | string;
	onClick: any;
}

function ImageItem({ url, title, id, onClick }: ImageItemProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<motion.figure
			whileTap={{ scale: 0.9 }}
			initial='hidden'
			animate={isInView && "visible"}
			ref={ref}
			className="inline-block group w-full rounded-md  relative dark:bg-black bg-white overflow-hidden before:absolute before:top-0 before:content-[''] before:h-full before:w-full hover:before:bg-gradient-to-t dark:before:from-gray-900  before:from-gray-200/90 before:from-5% before:to-transparent before:to-90% cursor-pointer"
			onClick={onClick}
		>
			<motion.img
				layoutId={`card-${id}`}
				whileHover={{ scale: 1.025 }}
				src={url}
				className='w-full bg-base-100 shadow-xl image-full cursor-pointer'
			/>
			<div className='flex flex-wrap mt-2 absolute bottom-0 left-0 p-2 group-hover:opacity-100 opacity-0 font-semibold '>
				<h1>{title}</h1>
			</div>
		</motion.figure>
	);
}

export default PhotoGrid;

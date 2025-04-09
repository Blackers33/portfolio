"use client";
import PhotoGrid from "@/components/PhotoGrid";
import { useEffect, useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export default function Home() {
	const [selected, setSelected] = useState(null);
	const [imagesFolders, setImagesFolders] = useState([]);

	useEffect(() => {
		fetch("/api")
			.then((res) => res.json())
			.then((data) => setImagesFolders(data));
	}, []);

	console.log(selected);


	return (
		<>
			<div className='absolute inset-0 flex flex-col items-center justify-end text-center px-4 my-100 z-1'>
				<h1 className='text-3xl sm:text-4xl lg:text-5xl font-title uppercase text-white'>
					Photography
				</h1>
				<p className='mt-6 mb-20 text-lg sm:text-xl text-gray-300 px-50'>
					Des photographies que j'ai prises un peu partout dans le monde.
				</p>
			</div>
			<div className='bg-background'>
				{Object.entries(imagesFolders).map(([folderName, photos]) => (
					<PhotoGrid
						key={folderName}
						title={folderName}
						photos={photos}
						setSelected={setSelected}
					/>
				))}
			</div>
			{/* Modal Fullscreen */}
			{selected && (
				<div className='fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center'>
					<button
						onClick={() => setSelected(null)}
						className='absolute top-4 right-4 text-white text-3xl font-bold'
					>
						&times;
					</button>
					<img
						src={selected}
						alt=''
						className='max-w-full max-h-full object-contain'
					/>
				</div>
			)}
		</>
	);
}

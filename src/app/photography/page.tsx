"use client";
import PhotoGrid from "@/components/photography/PhotoGrid";
import { useEffect, useState } from "react";
import "react-image-lightbox/style.css";

export default function Home() {
	const [imagesFolders, setImagesFolders] = useState([]);

	useEffect(() => {
		fetch("/api")
			.then((res) => res.json())
			.then((data) => setImagesFolders(data));
	}, []);



	return (
		<>
			<div className='absolute inset-0 flex flex-col items-center justify-end text-center px-4 my-100 z-1'>
				<h1 className='text-3xl sm:text-4xl lg:text-5xl font-title uppercase text-white'>
					Photography
				</h1>
				<p className='mt-6 mb-20 text-lg sm:text-xl text-gray-300 sm:px-50'>
					Des photographies que j'ai prises un peu partout dans le monde.
				</p>
			</div>
			<div className='bg-background'>
				{Object.entries(imagesFolders).map(([folderName, photos]) => (
					<PhotoGrid
						key={folderName}
						title={folderName}
						photos={photos}
					/>
				))}
			</div>
		</>
	);
}

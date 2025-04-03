"use client";
// inspired by tom is loading
import React, { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
//import { items } from "@/components/website/constant";
const imgPreview = {
	img1: "https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format",
	img2: "https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format",
	img3: "https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format",
	img4: "https://images.unsplash.com/photo-1584043204475-8cc101d6c77a?q=80&w=1200&auto=format",
	img5: "https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format",
	img6: "https://images.unsplash.com/photo-1518599904199-0ca897819ddb?q=80&w=1200&auto=format",
	img7: "https://images.unsplash.com/photo-1706049379414-437ec3a54e93?q=80&w=1200&auto=format",
	img8: "https://images.unsplash.com/photo-1709949908219-fd9046282019?q=80&w=1200&auto=format",
	img9: "https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=1200&auto=format",
	img10:
		"https://images.unsplash.com/photo-1462989856370-729a9c1e2c91?q=80&w=1200&auto=format",
	img11:
		"https://images.unsplash.com/photo-1475727946784-2890c8fdb9c8?q=80&w=1200&auto=format",
	img12:
		"https://images.unsplash.com/photo-1546942113-a6c43b63104a?q=80&w=1200&auto=format",
	img13:
		"https://images.unsplash.com/photo-1726551195764-f98a8e8a57c3?q=80&w=1200&auto=format",
	img14:
		"https://images.unsplash.com/photo-1726551195795-612ca47c0b7d?q=80&w=1200&auto=format",
	img15:
		"https://images.unsplash.com/photo-1532423622396-10a3f979251a?q=80&w=1200&auto=format",
	img16:
		"https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1200&auto=format",
	img17:
		"https://images.unsplash.com/photo-1496861083958-175bb1bd5702?q=80&w=1200&auto=format",
	img18:
		"https://images.unsplash.com/photo-1469212044023-0e55b4b9745a?q=80&w=1200&auto=format",
};

const items = [
	{
		id: 1,
		url: imgPreview.img1,
		title: "Misty Mountain Majesty",
		description:
			"A breathtaking view of misty mountains shrouded in clouds, creating an ethereal landscape.",
		tags: ["Misty", "Mountains", "Clouds", "Ethereal", "Landscape"],
	},
	{
		id: 2,
		url: imgPreview.img2,
		title: "Winter Wonderland",
		description:
			"A serene winter scene with snow-covered trees and mountains, showcasing nature's pristine beauty.",
		tags: ["Winter", "Snow", "Trees", "Mountains", "Serene"],
	},
	{
		id: 3,
		url: imgPreview.img3,
		title: "Autumn Mountain Retreat",
		description:
			"A cozy cabin nestled in the mountains, surrounded by the vibrant colors of autumn foliage.",
		tags: ["Autumn", "Cabin", "Mountains", "Foliage", "Cozy"],
	},
	{
		id: 4,
		url: imgPreview.img4,
		title: "Tranquil Lake Reflection",
		description:
			"A calm mountain lake perfectly reflecting the surrounding peaks and sky, creating a mirror-like surface.",
		tags: ["Lake", "Reflection", "Mountains", "Tranquil", "Mirror"],
	},
	{
		id: 5,
		url: imgPreview.img5,
		title: "Misty Mountain Peaks",
		description:
			"Majestic mountain peaks emerging from a sea of clouds, showcasing nature's grandeur.",
		tags: ["Misty", "Peaks", "Clouds", "Majestic", "Nature"],
	},
	{
		id: 6,
		url: imgPreview.img6,
		title: "Golden Hour Glow",
		description:
			"A stunning mountain landscape bathed in the warm light of the golden hour, highlighting every contour.",
		tags: ["Golden Hour", "Mountains", "Landscape", "Warm", "Scenic"],
	},
	{
		id: 7,
		url: imgPreview.img7,
		title: "Snowy Mountain Highway",
		description:
			"A winding road cutting through a snowy mountain landscape, inviting adventure and exploration.",
		tags: ["Snow", "Road", "Mountains", "Winter", "Adventure"],
	},
	{
		id: 8,
		url: imgPreview.img8,
		title: "Foggy Mountain Forest",
		description:
			"A mysterious and enchanting forest shrouded in fog, with mountains looming in the background.",
		tags: ["Fog", "Forest", "Mountains", "Mysterious", "Enchanting"],
	},
	{
		id: 9,
		url: imgPreview.img9,
		title: "Sunset Mountain Silhouette",
		description:
			"A dramatic silhouette of mountain peaks against a vibrant sunset sky, creating a stunning contrast.",
		tags: ["Sunset", "Silhouette", "Mountains", "Dramatic", "Sky"],
	},
	{
		id: 10,
		url: imgPreview.img10,
		title: "Alpine Meadow Bliss",
		description:
			"A lush alpine meadow dotted with wildflowers, set against a backdrop of towering mountain peaks.",
		tags: ["Alpine", "Meadow", "Wildflowers", "Mountains", "Peaceful"],
	},
	{
		id: 11,
		url: imgPreview.img11,
		title: "Mountain Lake Serenity",
		description:
			"A serene mountain lake surrounded by pine forests, reflecting the calm beauty of the wilderness.",
		tags: ["Lake", "Mountains", "Forest", "Reflection", "Serenity"],
	},
	{
		id: 12,
		url: imgPreview.img12,
		title: "Icy Mountain Stream",
		description:
			"A crystal-clear mountain stream flowing through a snowy landscape, showcasing winter's pristine beauty.",
		tags: ["Stream", "Snow", "Winter", "Mountains", "Crystal"],
	},
	{
		id: 13,
		url: imgPreview.img13,
		title: "Wildflower Mountain Meadow",
		description:
			"A colorful array of wildflowers carpeting a mountain meadow, with majestic peaks in the distance.",
		tags: ["Wildflowers", "Meadow", "Mountains", "Colorful", "Nature"],
	},
	{
		id: 14,
		url: imgPreview.img14,
		title: "Mountain Valley Vista",
		description:
			"A sweeping view of a vast mountain valley, showcasing the grandeur of the natural landscape.",
		tags: ["Valley", "Mountains", "Vista", "Landscape", "Grandeur"],
	},
	{
		id: 15,
		url: imgPreview.img15,
		title: "Rugged Mountain Terrain",
		description:
			"A close-up view of rugged mountain terrain, highlighting the raw beauty and texture of the rocks.",
		tags: ["Rugged", "Terrain", "Mountains", "Texture", "Close-up"],
	},
	{
		id: 16,
		url: imgPreview.img16,
		title: "Mountain Wildflower Bloom",
		description:
			"A vibrant display of mountain wildflowers in full bloom, adding splashes of color to the alpine landscape.",
		tags: ["Wildflowers", "Bloom", "Mountains", "Vibrant", "Alpine"],
	},
	{
		id: 17,
		url: imgPreview.img17,
		title: "Mountain River Rapids",
		description:
			"A rushing mountain river cutting through rocky terrain, showcasing the power and beauty of nature.",
		tags: ["River", "Rapids", "Mountains", "Power", "Nature"],
	},
	{
		id: 18,
		url: imgPreview.img18,
		title: "Lush Mountain Valley",
		description:
			"A verdant mountain valley filled with lush vegetation and winding streams, epitomizing natural beauty.",
		tags: ["Valley", "Lush", "Mountains", "Streams", "Verdant"],
	},
];

function PhotoGrid() {
    const [selected, setSelected] = useState(null);
    

	return (
		<>
			<div className='container mx-auto p-4 '>
                <span className="font-title text-2xl">Australie</span>
				<div className='columns-2 md:columns-3 2xl:columns-4 gap-4 mt-10'>
					<>
						{items.map((item, index) => (
							<ImageItem
								key={item.id}
								item={item}
								index={index}
								setSelected={setSelected}
							/>
						))}
					</>
				</div>
			</div>
		</>
	);
}
interface Item {
	id: number;
	url: string;
	title: string;
}

interface ImageItemProps {
	item: Item;
	index: number | string;
	setSelected: any;
}

function ImageItem({ item, index, setSelected }: ImageItemProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<motion.figure
			whileTap={{ scale: 0.9 }}
			initial='hidden'
			animate={isInView && "visible"}
			ref={ref}
			className="inline-block group w-full rounded-md  relative dark:bg-black bg-white overflow-hidden before:absolute before:top-0 before:content-[''] before:h-full before:w-full hover:before:bg-gradient-to-t dark:before:from-gray-900  before:from-gray-200/90 before:from-5% before:to-transparent before:to-90% cursor-pointer"
			onClick={() => setSelected(item)}
		>
			<motion.img
				layoutId={`card-${item.id}`}
				whileHover={{ scale: 1.025 }}
				src={item.url}
				className='w-full bg-base-100 shadow-xl image-full cursor-pointer'
			/>
			<div className='flex flex-wrap mt-2 absolute bottom-0 left-0 p-2 group-hover:opacity-100 opacity-0 font-semibold '>
				<h1>{item.title}</h1>
			</div>
		</motion.figure>
	);
}

export default PhotoGrid;

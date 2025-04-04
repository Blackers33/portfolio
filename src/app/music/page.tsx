

export default function Home() {
    return (
			<>
				<div className='absolute inset-0 flex flex-col items-center justify-end text-center px-4 my-100 z-1'>
					<h1 className='text-3xl sm:text-4xl lg:text-5xl font-title uppercase text-white'>
						Music
					</h1>
					<p className='mt-6 mb-20 text-lg sm:text-xl text-gray-300'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
						fuga! Voluptatibus repudiandae ipsum harum enim, debitis obcaecati
						ipsa incidunt, fuga cumque modi quo voluptates aliquam commodi nam
						et, quaerat dignissimos.
					</p>
				</div>
				<div className='bg-background dark:bg-foreground'>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/Ryz742QBAwg?si=NGpP8g9ewRfCUWmI'
						title='YouTube video player'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						referrerpolicy='strict-origin-when-cross-origin'
						allowfullscreen
					></iframe>
				</div>
			</>
		);
}

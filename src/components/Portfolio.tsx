import React from 'react'
import StripeCard from './StripeCard';

export default function Portfolio() {
  return (
		<div className='mb-40'>
			<div className='text-3xl sm:text-4xl lg:text-5xl font-title mb-20'>
				Portfolio
			</div>
			<div className='flex flex-wrap gap-30'>
				<StripeCard />
				<StripeCard />
				<StripeCard />
				<StripeCard />
			</div>
		</div>
	);
}

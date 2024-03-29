'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

interface RaceCardProps {
	race: string
	imageName: string
	color: string
}

const RaceCard: FC<RaceCardProps> = ({ race, imageName }) => {
	const [isHover, setIsHover] = useState(false)

	const handleMouseEnter = () => {
		setIsHover(true)
	}

	const handleMouseLeave = () => {
		setIsHover(false)
	}

	return (
		<li
			className='w-full sm:w-1/2 cursor-pointer p-6  rounded-3xl shadow-lg border-2 transition-all scale-75 hover:scale-100 hover:shadow-[#fefefe]'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<Link href={imageName}>
				<div className='flex flex-col items-center'>
					<Image
						width={200}
						height={100}
						alt={`${race} logo`}
						src={`/${imageName}.webp`}
					/>
					<h2 className='text-center text-2xl mt-8 transition-all'>
						{race}
					</h2>
				</div>
			</Link>
		</li>
	)
}

export default RaceCard

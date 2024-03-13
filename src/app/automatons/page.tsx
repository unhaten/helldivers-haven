import Image from 'next/image'
import { FC } from 'react'

interface AutomatonsPageProps {}

const AutomatonsPage: FC<AutomatonsPageProps> = async () => {
	return (
		<main>
			<h1 className='mt-4 lg:mt-16 xl:mt-32 text-center text-3xl font-bold'>
				The Automatons
			</h1>
			<div className='my-8 md:my-16 px-4 flex flex-col items-center lg:items-start lg:flex-row'>
				<Image
					src='/automatons-hero.png'
					width={1000}
					height={200}
					alt='automatons'
					className='rounded-xl w-[400px] sm:w-[500px] xl:w-[600px] 2xl:w-[800px] mb-6 sm:mb-8'
				/>
				<div className='w-full p-4'>
					<h2 className='text-center text-2xl font-medium text-primary'>
						Planets you should focus on
					</h2>
				</div>
			</div>
		</main>
	)
}

export default AutomatonsPage

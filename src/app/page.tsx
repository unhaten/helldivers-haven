import { FC } from 'react'
import { Button } from './components/ui/button'
import { ModeToggle } from './components/ui/toggle-mode'
import Image from 'next/image'
import { AspectRatio } from './components/ui/aspect-ratio'

interface HomeProps {}

const Home: FC<HomeProps> = async () => {
	// const data = await fetch('https://helldivers-2.fly.dev/api/').then(res =>
	// 	res.json()
	// )

	// const currentWarId = data.current

	// console.log(currentWarId)

	// const war = await fetch(
	// 	`https://helldivers-2.fly.dev/api/${currentWarId}/planets`
	// ).then(res => res.json())

	// console.log(war)

	// const planet = await fetch(
	// 	`https://helldivers-2.fly.dev/api/${currentWarId}/planets/64` // meridia
	// 	// 125- fenrir III
	// ).then(res => res.json())

	// console.log(planet)

	return (
		<main>
			<div className='mt-32 px-4 flex items-center'>
				<div className='w-[1920px] h-[600px]'>
					<AspectRatio ratio={16 / 9} className=''>
						<Image
							src='/hero.jpg'
							alt='logo'
							width={1000}
							height={1}
							className='rounded-xl object-cover opacity-50 animate-fadeIn'
						/>
					</AspectRatio>
				</div>
				<div className='text-center w-full'>
					<h1 className='text-2xl'>Welcome to the</h1>
					<h2 className='text-6xl text-primary font-bold'>
						Helldive Haven
					</h2>
					<p className='mt-6'>Current helldivers: 948775</p>
					<p className='my-6 w-1/2 m-auto text-lg'>
						Goal of this app is to unite every one citizen in order
						to withstand against our dangerous foes and protect our
						fate, destiny and the most important - Democracy
					</p>
				</div>
			</div>
			{/* <h3 className='text-center my-16'>Unite!</h3>
			<div className=''>
				<Image
					src='/hero2.png'
					alt='logo'
					width={'1920'}
					height={1}
					className='rounded-xl opacity-100 max-w-[1100px] '
				/>
			</div> */}
		</main>
	)
}

export default Home

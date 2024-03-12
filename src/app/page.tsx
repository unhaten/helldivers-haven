import { FC } from 'react'
import { Button } from './components/ui/button'
import { ModeToggle } from './components/ui/toggle-mode'
import Image from 'next/image'
import { AspectRatio } from './components/ui/aspect-ratio'
import RaceList from './components/race-list'
import { PlanetStatus } from '@/lib/definitions'

interface HomeProps {}

const Home: FC<HomeProps> = async () => {
	const data = await fetch('https://helldivers-2.fly.dev/api/').then(res =>
		res.json()
	)

	const currentWarId = data.current

	// console.log(currentWarId)

	// const planets = await fetch(
	// 	`https://helldivers-2.fly.dev/api/${currentWarId}/planets`
	// ).then(res => res.json())

	// planetsIdArray.map(item => {
	// 	fetch(
	// 		`https://helldivers-2.fly.dev/api/${currentWarId}/planets/${item}`
	// 	).then(res => res.json())
	// })

	const planetsStatus = await fetch(
		`https://helldivers-2.fly.dev/api/${currentWarId}/status`
	)
		.then(res => res.json())
		.then(data => data.planet_status)

	// console.log(planetsStatus)

	let totalPlayers = 0

	planetsStatus.map((item: PlanetStatus) => (totalPlayers += item.players))

	console.log(totalPlayers)

	// const totalPlayers = await fetch(
	// 	`https://helldivers-2.fly.dev/api/${currentWarId}/planets/`
	// ).then(res => res.json())

	// console.log(war)

	// const planet = await fetch(
	// 	`https://helldivers-2.fly.dev/api/${currentWarId}/planets/64` // meridia
	// 	// 125- fenrir III
	// ).then(res => res.json())

	// status for amount of players

	// console.log(planet)

	return (
		<main>
			<div className='mt-4 px-4 flex flex-col items-center lg:flex-row lg:mt-16 xl:mt-32'>
				<Image
					src='/hero.jpg'
					alt='logo'
					width={'1000'}
					height={100}
					className='rounded-xl object-cover opacity-80 animate-fadeIn w-[500px] lg-[600px] xl:w-[800px] 2xl:w-[1000px]'
				/>
				<div className='text-center w-full mt-8 lg:mt-0'>
					<h1 className='text-2xl'>Welcome to the</h1>
					<h2 className='text-6xl text-primary font-bold'>
						Helldive Haven
					</h2>
					<p className='mt-6'>
						Current helldivers on a mission: {totalPlayers}
					</p>
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
			<h2 className='text-center text-4xl font-bold my-8 lg:my-16'>
				Choose faction
			</h2>
			<RaceList />
		</main>
	)
}

export default Home

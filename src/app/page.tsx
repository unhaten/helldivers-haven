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
		`https://helldivers-2.fly.dev/api/${currentWarId}/status`,
		// { cache: 'no-cache' }
		{ next: { revalidate: 3600 } }
	)
		.then(res => res.json())
		.then(data => data.planet_status)

	// console.log(planetsStatus)

	let totalPlayers = 0

	const planetNamesArray: string[] = []

	planetsStatus.map((item: PlanetStatus) => {
		// console.log(item.players)
		// console.log(item.health)
		if (item.players > 0) {
			if (
				item.health <= 1000000 &&
				item.liberation < 100
				// (item.health === 1000000 && item.liberation < 100) ||
				// item.players === 0
			) {
				planetNamesArray.push(item.planet.name)
			}
		}
		totalPlayers += item.players
	})

	// const planetAttacks = await fetch(
	// 	`https://helldivers-2.fly.dev/api/${currentWarId}/status`
	// )
	// 	.then(res => res.json())
	// 	.then(data => data.planet_attacks)

	// console.log(planetAttacks)

	//////////////////////////////////////////////////////////////////////
	// const planetNames = planetAttacks.map((planet: any) => {
	// 	// console.log(planet.target.name)

	// 	planetNamesArray.push(planet.target.name)
	// 	planetNamesArray.push(planet.source.name)
	// })

	console.log(planetNamesArray)
	///////////////////////////////////////////////////////////////////

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
						fate, destiny and the most important - The Democracy
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

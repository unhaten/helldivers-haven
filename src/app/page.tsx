import { FC } from 'react'
import { Button } from './components/ui/button'
import { ModeToggle } from './components/ui/toggle-mode'

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
			<div className='bg-background'>
				<h1 className='text-3xl font-bold underline bg-teal-600'>
					Helldive Haven
				</h1>
				<Button>click me</Button>
				<ModeToggle />
			</div>
		</main>
	)
}

export default Home

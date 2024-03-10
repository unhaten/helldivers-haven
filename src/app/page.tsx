import { FC } from 'react'

interface HomeProps {}

const Home: FC<HomeProps> = async () => {
	const data = await fetch('https://helldivers-2.fly.dev/api/').then(res =>
		res.json()
	)

	const currentWarId = data.current

	console.log(currentWarId)

	const war = await fetch(
		`https://helldivers-2.fly.dev/api/${currentWarId}/planets`
	).then(res => res.json())

	console.log(war)

	const planet = await fetch(
		`https://helldivers-2.fly.dev/api/${currentWarId}/planets/64` // meridia
		// 125- fenrir III
	).then(res => res.json())

	console.log(planet)

	return (
		<main>
			<p>this is a test</p>
		</main>
	)
}

export default Home

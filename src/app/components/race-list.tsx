import RaceCard from './race-card'

const RaceList = () => {
	return (
		<ul className='grid grid-cols-1 xl:grid-cols-3 items-center justify-center justify-items-center text-center text-white'>
			<RaceCard
				race={'The Automatons'}
				imageName={'automatons'}
				color='#670101'
			/>
			<RaceCard
				race={'The Humans'}
				imageName={'humans'}
				color='#FEFEFE'
			/>
			<RaceCard
				race={'The Terminids'}
				imageName={'terminids'}
				color='#F9D02C'
			/>
		</ul>
	)
}

export default RaceList

import RaceCard from './race-card'

const RaceList = () => {
	return (
		<ul className='grid grid-cols-3 items-center justify-center justify-items-center text-center'>
			<RaceCard race={'The Automatons'} imageName={'automatons'} />
			<RaceCard race={'The Humans'} imageName={'humans'} />
			<RaceCard race={'The Terminids'} imageName={'terminids'} />
		</ul>
	)
}

export default RaceList

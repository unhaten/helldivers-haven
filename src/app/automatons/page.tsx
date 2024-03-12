import { FC } from 'react'

interface AutomatonsPageProps {}

const AutomatonsPage: FC<AutomatonsPageProps> = async () => {
	return (
		<main>
			<h1 className='mt-4 lg:mt-16 xl:mt-32 text-center text-3xl font-bold'>
				The Automatons
			</h1>
			<div className='px-4 flex flex-col items-center lg:flex-row'></div>
		</main>
	)
}

export default AutomatonsPage

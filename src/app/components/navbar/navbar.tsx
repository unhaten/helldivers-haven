'use client'

import Link from 'next/link'

import Image from 'next/image'
import { NavBarMenuI } from '@/lib/definitions'
import NavBarMenu from './navbar-menu'

const data: NavBarMenuI[] = [
	{
		name: 'Races',
		links: [
			{ name: 'The Humans', href: '/faction/humans' },
			{ name: 'The Terminids', href: '/faction/terminids' },
			{ name: 'The Automatons', href: '/faction/automatons' }
		]
	},
	{ name: 'Main Options', links: [{ name: 'Documentation', href: '/docs' }] }
]

const NavBar = () => {
	return (
		<>
			<nav className='flex items-center justify-between gap-4 max-w-[1580px] m-auto p-4 rounded'>
				<Link href='/'>
					<Image
						src='/Helldivers-logo.webp'
						alt='logo'
						width={150}
						height={1}
					/>
				</Link>
				<div className='flex gap-4 items-center'>
					{data.map((item: NavBarMenuI, index) => {
						return (
							<NavBarMenu
								key={index}
								name={item.name}
								links={item.links}
							/>
						)
					})}
				</div>
			</nav>
		</>
	)
}

export default NavBar

'use client'

import Link from 'next/link'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
	navigationMenuTriggerStyle
} from './ui/navigation-menu'
import Image from 'next/image'

const NavBar = () => {
	return (
		<>
			<nav className='flex items-center justify-between gap-4 w-[1920px] m-auto p-4 rounded'>
				<Link href='/'>
					<Image
						src='/Helldivers-logo.webp'
						alt='logo'
						width={150}
						height={1}
					/>
				</Link>
				<div className=''>
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger>
									Main Options
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<Link href='/docs' legacyBehavior passHref>
										<NavigationMenuLink
											className={navigationMenuTriggerStyle()}
										>
											Documentation
										</NavigationMenuLink>
									</Link>
								</NavigationMenuContent>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
			</nav>
		</>
	)
}

export default NavBar

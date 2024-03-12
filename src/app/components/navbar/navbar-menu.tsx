import Link from 'next/link'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger
} from '../ui/navigation-menu'
import { FC } from 'react'
import { NavBarMenuI, NavBarMenuItemI } from '@/lib/definitions'
import NavBarMenuItem from './navbar-menu-item'

const NavBarMenu: FC<NavBarMenuI> = ({ name, links }) => {
	return (
		<NavigationMenu className='w-150'>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>{name}</NavigationMenuTrigger>
					<NavigationMenuContent>
						{links.map((link: NavBarMenuItemI, index) => (
							<NavBarMenuItem
								key={index}
								href={link.href}
								name={link.name}
							/>
						))}
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}

export default NavBarMenu

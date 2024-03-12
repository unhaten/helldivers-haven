import Link from 'next/link'
import {
	NavigationMenuLink,
	navigationMenuTriggerStyle
} from '../ui/navigation-menu'
import { FC } from 'react'
import { NavBarMenuItemI } from '@/lib/definitions'

const NavBarMenuItem: FC<NavBarMenuItemI> = ({ href, name }) => {
	return (
		<Link href={href} legacyBehavior passHref>
			<NavigationMenuLink
				className={`${navigationMenuTriggerStyle()} nav__links`}
			>
				<p>{name}</p>
			</NavigationMenuLink>
		</Link>
	)
}

export default NavBarMenuItem

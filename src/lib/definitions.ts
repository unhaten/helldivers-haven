export interface NavBarMenuI {
	name: string
	links: NavBarMenuItemI[]
}

export interface NavBarMenuItemI {
	name: string
	href: string
}

export interface PlanetStatus {
	health: number
	liberation: number
	owner: string
	planet: {
		disabled: true
		hash: number
		index: number
		initial_owner: string
		max_health: number
		name: string
		position: {
			x: number
			y: number
		}
		waypoints: [number]
	}
	players: number
	regen_per_second: number
}

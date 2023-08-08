import { ElementType, ReactNode } from 'react';

export type TNavigationProps = {
	className?: string;
	children?: ReactNode;
	as?: ElementType;
	pathname: string;
	routes: TNavigationRoute[];
}

export type TNavigationRoute = {
	name: string,
	href: string,
	icon?: string,
}

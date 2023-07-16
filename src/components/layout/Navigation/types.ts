import { FC } from 'react';

export type TNavigationProps = {
	className?: string;
	Routes?: FC<TNavigationRoute>;
}

export type TNavigationRoute = {
	className: string;
	activeClassName: string;
	iconClassName: string;
	labelClassName: string;
}

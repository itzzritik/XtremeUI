import { ReactNode } from 'react';

import clsx from 'clsx';

import styles from './navigation.module.scss';

export const Navigation = (props: INavigationProps) => {
	const { className, brandLogo, brandName, children, open, setOpen } = props;

	const NavigationClsx = clsx(
		styles.navigation,
		className,
	);
	return (
		<section className={NavigationClsx} role='navigation'>
			<span>Navigation</span>
			{children}
		</section>
	);
};

export type INavigationProps = {
	className?: string;
	children?: ReactNode;
	brandLogo?: ReactNode;
	brandName?: string;
	open?: boolean;
	setOpen?: (open: boolean) => void;
}

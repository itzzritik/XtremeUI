import clsx from 'clsx';

import styles from './navigation.module.scss';

export const Navigation = (props: INavigationProps) => {
	const { className } = props;

	const NavigationClsx = clsx(
		styles.navigation,
		className,
	);

	return (
		<section className={NavigationClsx} role='navigation' />
	);
};

export type INavigationProps = {
	className?: string;
}

import { ReactNode } from 'react';

import clsx from 'clsx';

import styles from './sider.module.scss';

export const Sider = (props: TSiderProps) => {
	const {
		className,
		children,
		leftSider,
		showMiniLeftSider = true,
		rightSider,
		showMiniRightSider = false,
		open = 'closed',
		setOpen,
	} = props;

	const SiderClsx = clsx(
		styles.sider,
		open === 'left' && styles.leftOpen,
		showMiniLeftSider && styles.miniLeftSider,
		open === 'right' && styles.rightOpen,
		showMiniRightSider && styles.miniRightSider,
		className,
	);

	return (
		<section className={SiderClsx} role='sider'>
			<div className={styles.leftSiderContainer}>
				{leftSider}
			</div>
			<div className={styles.rightSiderContainer}>
				{rightSider}
			</div>
			<div className={styles.content}>
				{children}
			</div>
		</section>
	);
};

export type TSiderProps = {
	className?: string;
	children?: ReactNode;
	leftSider?: ReactNode;
	showMiniLeftSider?: boolean;
	rightSider?: ReactNode;
	showMiniRightSider?: boolean;
	open?: keyof typeof EOpenModes;
	setOpen?: (open: boolean) => void;
}
enum EOpenModes {
	left = 'left',
	right = 'right',
	closed = 'closed',
}

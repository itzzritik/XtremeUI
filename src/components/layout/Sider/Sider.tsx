import { ReactNode } from 'react';

import clsx from 'clsx';

import styles from './sider.module.scss';

export const Sider = (props: ISiderProps) => {
	const { className, children, leftSider, rightSider, open, setOpen } = props;

	const SiderClsx = clsx(
		styles.sider,
		open === 'left' && styles.leftOpen,
		open === 'right' && styles.rightOpen,
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

export type ISiderProps = {
	className?: string;
	children?: ReactNode;
	leftSider?: ReactNode;
	rightSider?: ReactNode;
	open?: keyof typeof openModes;
	setOpen?: (open: boolean) => void;
}
enum openModes {
	left = 'left',
	right = 'right',
	closed = 'closed',
}

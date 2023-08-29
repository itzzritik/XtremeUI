import { forwardRef, useRef } from 'react';

import clsx from 'clsx';

import { useXData } from '#components/context/useContext';

import styles from './sider.module.scss';
import { TSiderProps } from './types';

export const Sider = forwardRef<HTMLDivElement, TSiderProps>((props, ref) => {
	const {
		className,
		children,
		leftSider,
		showMiniLeftSider = true,
		rightSider,
		showMiniRightSider = false,
	} = props;

	const { siderMode } = useXData();
	const leftSiderRef = useRef<HTMLDivElement>(null);
	const rightSiderRef = useRef<HTMLDivElement>(null);

	const SiderClsx = clsx(
		styles.sider,
		siderMode === 'left' && leftSider && styles.leftOpen,
		showMiniLeftSider && styles.miniLeftSider,
		siderMode === 'right' && rightSider && styles.rightOpen,
		showMiniRightSider && styles.miniRightSider,
		className,
	);
	console.log(rightSiderRef?.current?.clientWidth);
	return (
		<main
			ref={ref}
			className={SiderClsx}
			style={{
				['--leftSiderWidth' as string]: `${leftSiderRef?.current?.clientWidth}px`,
				['--rightSiderWidth' as string]: `${rightSiderRef?.current?.clientWidth}px`,
			}}
			role='region'
		>
			<div ref={leftSiderRef} className={styles.leftSiderContainer}>
				{leftSider}
			</div>
			<div ref={rightSiderRef} className={styles.rightSiderContainer}>
				{rightSider}
			</div>
			<div className={styles.content}>
				{children}
			</div>
		</main>
	);
});

Sider.displayName = 'Sider';

import { forwardRef } from 'react';

import clsx from 'clsx';

import styles from './spinner.module.scss';
import { ESpinnerSize, ISpinnerProps } from './types';

export const Spinner = forwardRef<HTMLDivElement, ISpinnerProps>((props, ref) => {
	const { className, label, size = 'default', fullpage = false } = props;

	const spinnerSize = `${typeof size === 'number' ? size : ESpinnerSize[size]}px`;
	const SpinnerClsx = clsx(
		styles.spinner,
		className,
		fullpage && styles.fullpage,
	);

	return (
		<div
			ref={ref}
			className={SpinnerClsx}
			style={{ ['--spinnerSize'as string]: spinnerSize }}
			role='spinner'
		>
			<div className={styles.spinnerWrapper}>
				<div className={styles.cubeTop} />
				<div className={styles.cubeWrapper}>
					<span className={styles.cubeFace} />
					<span className={styles.cubeFace} />
					<span className={styles.cubeFace} />
					<span className={styles.cubeFace} />
				</div>
			</div>
			{fullpage && <span className={styles.label}>{label}</span>}
		</div>
	);
});

Spinner.displayName = 'Spinner';

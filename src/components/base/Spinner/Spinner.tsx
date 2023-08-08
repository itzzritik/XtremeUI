import { forwardRef } from 'react';

import clsx from 'clsx';

import styles from './spinner.module.scss';
import { ESpinnerSize, ISpinnerProps } from './types';

export const Spinner = forwardRef<HTMLDivElement, ISpinnerProps>((props: ISpinnerProps, ref) => {
	const { className, size = 'default' } = props;

	const spinnerSize = `${typeof size === 'number' ? size : ESpinnerSize[size]}px`;

	const SpinnerClsx = clsx(
		styles.spinner,
		className,
	);

	return (
		<div className={SpinnerClsx} ref={ref} style={{ ['--spinnerSize'as string]: spinnerSize }}>
			<div className={styles.spinnerWrapper}>
				<div className={styles.cubeTop} />
				<div className={styles.cubeWrapper}>
					<span className={styles.cubeFace} />
					<span className={styles.cubeFace} />
					<span className={styles.cubeFace} />
					<span className={styles.cubeFace} />
				</div>
			</div>
		</div>
	);
});

Spinner.displayName = 'ProgressBar';

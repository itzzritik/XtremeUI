import { forwardRef } from 'react';

import clsx from 'clsx';

import './spinner.scss';
import { ESpinnerSize, ISpinnerProps } from './types';

export const Spinner = forwardRef<HTMLDivElement, ISpinnerProps>((props, ref) => {
	const { className, label, size = 'default', fullpage = false } = props;

	const spinnerSize = `${typeof size === 'number' ? size : ESpinnerSize[size]}px`;
	const SpinnerClsx = clsx(
		'xtrSpinner',
		fullpage && 'fullpage',
		className,
	);

	return (
		<div
			ref={ref}
			className={SpinnerClsx}
			style={{ ['--spinnerSize'as string]: spinnerSize }}
			role='progressbar'
		>
			<div className='spinnerWrapper'>
				<div className='cubeTop' />
				<div className='cubeWrapper'>
					<span className='cubeFace' />
					<span className='cubeFace' />
					<span className='cubeFace' />
					<span className='cubeFace' />
				</div>
			</div>
			{fullpage && <span className='label'>{label}</span>}
		</div>
	);
});

Spinner.displayName = 'Spinner';

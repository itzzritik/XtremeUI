import { forwardRef } from 'react';

import clsx from 'clsx';

import { Button } from '#components/base/Button/Button';
import { TButtonProps } from '#components/base/Button/types';
import { Icon } from '#components/base/Icon/Icon';
import { useXData } from '#components/context/useContext';

import './siderModal.scss';
import { TSiderModalProps } from './types';

export const SiderModal = forwardRef<HTMLDivElement, TSiderModalProps>((props, ref) => {
	const {
		className,
		children,
		title,
		icon,
		primaryButtonProps = {} as TButtonProps,
		secondaryButtonProps = {} as TButtonProps,
	} = props;

	const { setSiderMode } = useXData();

	const SiderModalClsx = clsx(
		'xtrSiderModal',
		className,
	);

	return (
		<div
			ref={ref}
			className={SiderModalClsx}
			role='dialog'
		>
			<div className='header'>
				<Button className='back' icon='f053' onClick={() => setSiderMode('closed')} />
				{icon && <Icon code={icon} type='duotone' />}
				<p className='title'>{title}</p>
			</div>
			<div className='body'>
				{children}
			</div>
			<div className='footer'>
				<Button
					type='primary'
					{...primaryButtonProps}
					className={clsx('primaryButton', primaryButtonProps?.className)}
				/>
				<Button
					type='secondary'
					{...secondaryButtonProps}
					className={clsx('secondaryButton', secondaryButtonProps?.className)}
				/>
			</div>
		</div>
	);
});

SiderModal.displayName = 'SiderModal';

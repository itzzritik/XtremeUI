import { forwardRef } from 'react';

import clsx from 'clsx';

import { Button } from '#components/base/Button/Button';
import { TButtonProps } from '#components/base/Button/types';
import { Icon } from '#components/base/Icon/Icon';
import { useXData } from '#components/context/useContext';

import styles from './siderModal.module.scss';
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
		styles.siderModal,
		className,
	);

	return (
		<div
			ref={ref}
			className={SiderModalClsx}
			role='dialog'
		>
			<div className={styles.header}>
				<Button className={styles.back} icon='f053' onClick={() => setSiderMode('closed')} />
				{icon && <Icon className={styles.icon} code={icon} type='duotone' />}
				<p className={styles.title}>{title}</p>
			</div>
			<div className={styles.body}>
				{children}
			</div>
			<div className={styles.footer}>
				<Button
					type='primary'
					{...primaryButtonProps}
					className={clsx(styles.primaryButton, primaryButtonProps?.className)}
				/>
				<Button
					type='secondary'
					{...secondaryButtonProps}
					className={clsx(styles.secondaryButton, secondaryButtonProps?.className)}
				/>
			</div>
		</div>
	);
});

SiderModal.displayName = 'SiderModal';

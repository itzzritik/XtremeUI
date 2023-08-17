import { forwardRef, useEffect, useState } from 'react';

import clsx from 'clsx';

import { Icon } from '../Icon/Icon';

import styles from './avatar.module.scss';
import { EAvatarSize, TAvatarProps } from './types';

export const Avatar = forwardRef<HTMLDivElement, TAvatarProps>((props, ref) => {
	const { className, src, placeholderIcon = 'f03e', size = 'default', onClick } = props;
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const avatarSize = typeof size === 'number' ? size : EAvatarSize[size];
	const AvatarClsx = clsx(
		styles.avatar,
		className,
		isLoading && styles.loading,
		isError && styles.error,
	);

	useEffect(() => {
		setIsLoading(true);
		setIsError(false);

		const img = new Image();
		img.src = src;
		img.onload = () => setIsLoading(false);
		img.onerror = () => {
			setIsLoading(false);
			setIsError(true);
		};

		return () => { img.onload = null; };
	}, [src]);

	return (
		<div
			ref={ref}
			className={AvatarClsx}
			style={{ ['--avatarSize'as string]: avatarSize + 'px' }}
			onClick={onClick}
			role='avatar'
		>
			{
				isLoading || isError ?
					<Icon
						className={styles.placeholder}
						type='solid'
						size={8 + avatarSize / 4}
						code={isError ? 'e1b7' : placeholderIcon}
					/>
					: <span className={styles.image} style={{ backgroundImage: `url(${src})` }} />
			}

		</div>
	);
});

Avatar.displayName = 'Avatar';

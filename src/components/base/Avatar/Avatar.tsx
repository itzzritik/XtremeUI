import { forwardRef, useEffect, useState } from 'react';

import clsx from 'clsx';

import { FACE_ICONS } from '#utils/constants/iconCollection';
import { readImageFile, readImageSrc } from '#utils/helper/imageHelper';

import { Icon } from '../Icon/Icon';

import './avatar.scss';
import { EAvatarSize, TAvatarProps } from './types';

const RANDOM_HAPPY_FACE = FACE_ICONS.happy[Math.floor(Math.random() * FACE_ICONS.happy.length)];

export const Avatar = forwardRef<HTMLDivElement, TAvatarProps>((props, ref) => {
	const { className, src, file, alt, placeholderIcon = RANDOM_HAPPY_FACE, size = 'default', onClick } = props;
	const [image, setImage] = useState<string>();
	const [isLoading, setIsLoading] = useState(!!src || !!file);
	const [isError, setIsError] = useState(false);

	const avatarSize = typeof size === 'number' ? size : EAvatarSize[size];
	const AvatarClsx = clsx(
		'xtrAvatar',
		className,
		isLoading && 'loading',
		isError && 'error',
	);

	const clearLoading = (img?: string) => {
		if (img) setTimeout(() => setImage(img), 300);
		setTimeout(() => setIsLoading(false), 1000);
	};

	useEffect(() => {
		try {
			if (file) {
				setIsLoading(true);
				setIsError(false);
				readImageFile(file)
					.then((img) => clearLoading(img))
					.catch((err) => {
						console.log(err);
						setIsLoading(false);
						setIsError(true);
					});
			}
			else if (src) {
				setIsLoading(true);
				setIsError(false);
				readImageSrc(src)
					.then((img) => clearLoading(img))
					.catch((err) => {
						console.log(err, src);
						setIsLoading(false);
						setIsError(true);
					});
			}
			else {
				setImage(undefined);
				clearLoading();
			}
		}
		catch {
			clearLoading();
		}
	}, [src, file]);

	return (
		<div
			ref={ref}
			className={AvatarClsx}
			style={{ ['--avatarSize'as string]: avatarSize + 'px' }}
			onClick={onClick}
			role='img'
		>
			{
				image
					? <img className='image' src={image} alt={alt} /> :
					<Icon className='placeholder'
						type='solid'
						size={8 + avatarSize / 4}
						code={isError ? 'e1b7' : placeholderIcon}
					/>
			}
		</div>
	);
});

Avatar.displayName = 'Avatar';

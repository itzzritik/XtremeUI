import { forwardRef, useEffect, useState } from 'react';

import clsx from 'clsx';

import { Icon } from '../Icon/Icon';

import './avatar.scss';
import { EAvatarSize, TAvatarProps } from './types';

export const Avatar = forwardRef<HTMLDivElement, TAvatarProps>((props, ref) => {
	const { className, src, file, alt, placeholderIcon = 'f03e', size = 'default', onClick } = props;
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

	const loadSrcImage = async (url: string, cb: (img?: string) => void) => {
		const response = await fetch(url);
		if (!response.ok) {
			setIsLoading(false);
			setIsError(false);
		}
		else {
			const blob = await response.blob();
			cb(URL.createObjectURL(blob));
		}
	};
	const loadFileImage = async (file: File, cb: (img?: string) => void) => {
		const reader = new FileReader();

		reader.onloadend = () => {
			cb(reader?.result?.toString());
		};
		reader.onerror = () => {
			setIsLoading(false);
			setIsError(true);
		};

		reader.readAsDataURL(file);
	};

	const clearLoading = (img?: string) => {
		img && setTimeout(() => setImage(img), 300);
		setTimeout(() => setIsLoading(false), 1000);
	};

	useEffect(() => {
		try {
			if (file) {
				setIsLoading(true);
				setIsError(false);
				loadFileImage(file, clearLoading);
			}
			else if (src) {
				setIsLoading(true);
				setIsError(false);
				loadSrcImage(src, clearLoading);
			}
			else {
				setImage(undefined);
				clearLoading();
			}
		}
		catch (err) {
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
				!image &&
				<Icon className='placeholder' type='solid' size={8 + avatarSize / 4} code={isError ? 'e1b7' : placeholderIcon} />
			}
			{
				image && <img className='image' src={image} alt={alt} />
			}
		</div>
	);
});

Avatar.displayName = 'Avatar';

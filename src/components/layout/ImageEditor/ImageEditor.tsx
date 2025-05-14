import { useCallback, useEffect, useState } from 'react';

import clsx from 'clsx';
import Cropper, { type Area } from 'react-easy-crop';

import { Icon } from '#components/base/Icon/Icon';
import { Spinner } from '#components/base/Spinner/Spinner';
import { getCroppedImg, getImageSize, readImageFile } from '#utils/helper/imageHelper';

import './imageEditor.scss';
import { TImageEditorProps } from './types';

const defaultZoom = 1;
export const ImageEditor = (props: TImageEditorProps) => {
	const { className, file, clearFile, minImageSize, cropShape = 'round', aspect = 1, zoomSpeed = 1, onChange } = props;
	const [imageSrc, setImageSrc] = useState<string>();
	const [mediaLoading, setMediaLoading] = useState(true);
	const [zoom, setZoom] = useState(defaultZoom);
	const [crop, setCrop] = useState({ x: 0, y: 0 });
	const [rotation, setRotation] = useState(0);
	const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>();

	const ImageEditorClsx = clsx(
		'xtrImageEditor',
		className,
	);

	const accept = async () => {
		try {
			const croppedImageFile = await getCroppedImg(imageSrc, croppedAreaPixels, rotation);
			if (croppedImageFile) onChange(croppedImageFile);
		} catch (e) {
			console.error(e);
		}
		clearFilePicker();
	};
	const clearFilePicker = useCallback(() => {
		setImageSrc(undefined);
		setCrop({ x: 0, y: 0 });
		setZoom(defaultZoom);
		setRotation(0);
		setCroppedAreaPixels(undefined);
		clearFile?.();
		setMediaLoading(true);
	}, [clearFile]);

	useEffect(() => {
		const getImageSrc = async () => {
			if (!file) return;
			const imageSrc = await readImageFile(file);
			const imageSize = await getImageSize(imageSrc);

			if (minImageSize && Math.min(imageSize.width, imageSize.height) < minImageSize) {
				clearFilePicker();
				return console.log(`Image should be at least ${minImageSize}x${minImageSize}`);
			}

			setImageSrc(imageSrc);
		};
		getImageSrc();
	}, [clearFilePicker, file, minImageSize]);

	if (!file) return null;

	return (
		<div className={ImageEditorClsx}>
			<Cropper
				image={imageSrc}
				onMediaLoaded={() => setMediaLoading(false)}
				cropShape={cropShape}
				aspect={aspect}
				zoom={zoom}
				zoomSpeed={zoomSpeed}
				onZoomChange={setZoom}
				rotation={rotation}
				onRotationChange={setRotation}
				crop={crop}
				onCropChange={setCrop}
				onCropComplete={(_, v) => setCroppedAreaPixels(v)}
			/>
			<div className='editorControls'>
				<Icon code='f00d' type='solid' onClick={clearFilePicker} />
				<Icon code='f2ea' type='solid' onClick={() => setRotation((v) => v - 90)} />
				<Icon code='f2f9' type='solid' onClick={() => setRotation((v) => v + 90)} />
				<Icon code='f00c' type='solid' onClick={accept} />
			</div>
			{mediaLoading && <Spinner fullpage />}
		</div>
	);
};

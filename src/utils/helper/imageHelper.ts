import { type Area } from 'react-easy-crop';

import { TEditedImageType } from '#components/layout/ImageEditor/types';

export const readImageSrc = async (src: string) => {
	return new Promise<string>((resolve, reject) => {
		fetch(src)
			.then((res) => {
				if (!res.ok) reject();
				return res.blob();
			})
			.then((blob) => resolve(URL.createObjectURL(blob)));
	});
};

export const readImageFile = async (file: Blob) => {
	return new Promise<string>((resolve, reject) => {
		const reader = new FileReader();
		reader.onloadend = () => {
			const img = reader?.result?.toString();
			if (img) resolve(img);
			else reject();
		};
		reader.onerror = reject;
		reader.readAsDataURL(file);
	});
};

export const createImage = (url: string) => {
	return new Promise<HTMLImageElement>((resolve, reject) => {
		const image = new Image();
		image.addEventListener('load', () => resolve(image));
		image.addEventListener('error', (error) => reject(error));
		image.src = url;
	});
};
export const getRadianAngle = (degreeValue: number) => {
	return (degreeValue * Math.PI) / 180;
};

export const getImageSize = async (imageSrc: string) => {
	return new Promise<{width: number, height: number}>((resolve) => {
		createImage(imageSrc)
			.then((image) => {
				resolve({
					width: image.width,
					height: image.height,
				});
			});
	});
};
export const getCroppedImg = async (imageSrc: string | undefined, pixelCrop: Area | undefined, rotation: number = 0) => {
	if (!imageSrc || !pixelCrop) return null;
	const image = await createImage(imageSrc);

	return new Promise<TEditedImageType>((resolve) => {
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');

		if (!ctx) return null;

		const maxSize = Math.max(image.width, image.height);
		const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

		canvas.width = safeArea;
		canvas.height = safeArea;

		ctx.translate(safeArea / 2, safeArea / 2);
		ctx.rotate(getRadianAngle(rotation));
		ctx.translate(-safeArea / 2, -safeArea / 2);

		ctx.drawImage(
			image,
			safeArea / 2 - image.width * 0.5,
			safeArea / 2 - image.height * 0.5,
		);
		const data = ctx.getImageData(0, 0, safeArea, safeArea);

		canvas.width = pixelCrop.width;
		canvas.height = pixelCrop.height;

		ctx.putImageData(
			data,
			Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x),
			Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y),
		);
		canvas.toBlob((blob) => resolve({
			blob: blob ?? undefined,
			base64: canvas.toDataURL('image/jpeg'),
		}), 'image/jpeg');
	});
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { FilePickerIcon } from './types';

export const getFilePickerIcon = (accept: string = '') => {
	if (accept.includes(',') && accept.includes('/')) {
		let media = 0;
		const categories = accept.split(',').map((v) => v.split('/')?.[0]);
		categories.forEach((v) => {
			if (v in FilePickerIcon) media++;
		});
		if (media > 0) return FilePickerIcon.multimedia;
	}

	if (accept.includes('/')) {
		const [fileCategory, fileExtension] = accept.split('/');

		if (fileExtension in FilePickerIcon) return FilePickerIcon[fileExtension];
		else if (fileCategory in FilePickerIcon) return FilePickerIcon[fileCategory];
	}

	const fileExtension = accept.includes(',') ? accept.split(',')?.[0]?.replace('.', '') : accept.replace('.', '');
	if (fileExtension in FilePickerIcon) return FilePickerIcon[fileExtension];

	return FilePickerIcon.file;
};

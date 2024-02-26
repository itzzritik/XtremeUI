import clsx from 'clsx';
import { createPortal } from 'react-dom';
import { useFilePicker } from 'use-file-picker';

import { ImageEditor } from '#components/layout/ImageEditor/ImageEditor';

import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';

import './filePicker.scss';
import { getFilePickerIcon } from './getFilePickerIcon';
import { TFilePickerProps, imageExts } from './types';

export const FilePicker = (props: TFilePickerProps) => {
	const { className, children, draggable = false, editable = false, multiple = false, accept = '*/*', onChange } = props;

	const isEditable = editable && !multiple &&
	(accept.includes('image') || imageExts.includes(accept?.split?.(',')?.[0]?.replace('.', '')));

	const { openFilePicker, loading, plainFiles, clear } = useFilePicker({
		accept,
		multiple,
		onFilesSuccessfullySelected: ({ plainFiles }: {plainFiles: Blob[]}) => {
			if (!isEditable) onChange(plainFiles);
		},
	});

	const FilePickerClsx = clsx(
		'xtrFilePicker',
		children && 'wrapper',
		draggable && 'draggable',
		className,
	);

	if (children) {
		return (
			<>
				<div className={FilePickerClsx} onClick={openFilePicker}>{children}</div>
				{
					isEditable && plainFiles?.[0] &&
					createPortal(
						<ImageEditor
							file={plainFiles?.[0]}
							clearFile={clear}
							onChange={(v) => onChange(v.blob ? [v.blob] : [])}
						/>,
						document.body,
					)
				}
			</>
		);
	}

	if (draggable) {
		return (
			<div className={FilePickerClsx} onClick={openFilePicker}>
				<Icon code='f0ed' type='duotone' size={64} />
				<h2>Drop File{multiple ? 's' : ''} Here</h2>
				<p>or click here to open file chooser</p>
			</div>
		);
	}

	return (
		<>
			<Button
				className={FilePickerClsx}
				label={`Choose File${multiple ? 's' : ''}`}
				icon={getFilePickerIcon(accept)}
				onClick={openFilePicker}
				loading={loading}
			/>
			{
				isEditable && plainFiles?.[0] &&
					createPortal(
						<ImageEditor
							file={plainFiles?.[0]}
							clearFile={clear}
							onChange={(v) => onChange(v.blob ? [v.blob] : [])}
						/>,
						document.body,
					)
			}
		</>
	);
};

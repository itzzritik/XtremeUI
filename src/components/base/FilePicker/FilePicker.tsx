import clsx from 'clsx';
import { useFilePicker } from 'use-file-picker';

import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';

import './filePicker.scss';
import { getFilePickerIcon } from './getFilePickerIcon';
import { TFilePickerProps } from './types';

export const FilePicker = (props: TFilePickerProps) => {
	const { className, children, draggable = false, multiple = false, accept = '*/*', onChange } = props;

	const { openFilePicker, loading } = useFilePicker({
		accept,
		multiple,
		onFilesSuccessfullySelected: ({ plainFiles }: {plainFiles: File[]}) => {
			onChange(plainFiles);
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
			<div className={FilePickerClsx} onClick={openFilePicker}>{children}</div>
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
		<Button
			className={FilePickerClsx}
			label={`Choose File${multiple ? 's' : ''}`}
			icon={getFilePickerIcon(accept)}
			onClick={openFilePicker}
			loading={loading}
		/>
	);
};

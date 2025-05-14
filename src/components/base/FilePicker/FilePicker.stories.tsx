import { useState } from 'react';

import { Avatar } from '#components/base/Avatar/Avatar';

import { FilePicker } from './FilePicker';
import { TFilePickerProps } from './types';

import type { Meta, StoryObj } from '@storybook/react';

const FilePickerComponent = (
	props: Omit<TFilePickerProps, 'value' | 'onChange'>,
) => {
	const [file, setFile] = useState<Blob[]>();

	return (
		<FilePicker {...props} onChange={setFile}>
			{props.children && <Avatar file={file?.[0]} size={200} />}
		</FilePicker>
	);
};

const meta = {
	title: 'Components/FilePicker',
	component: FilePickerComponent,
	tags: ['autodocs'],
	argTypes: {
		className: { control: false },
	},
	args: {
		accept: 'all',
		multiple: false,
	},
} satisfies Meta<typeof FilePicker>;

export default meta;

export const Button: StoryObj<typeof meta> = {
	args: {},
};

export const Draggable: StoryObj<typeof meta> = {
	args: {
		draggable: true,
	},
};

export const Wrapper: StoryObj<typeof meta> = {
	args: {
		accept: 'image/*',
		children: 'Avatar',
		editable: true,
	},
};

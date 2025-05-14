import { useState } from 'react';

import { Avatar } from '#components/base/Avatar/Avatar';
import { FilePicker } from '#components/base/FilePicker/FilePicker';

import { ImageEditor } from './ImageEditor';
import { TImageEditorProps, TEditedImageType } from './types';

import type { Meta, StoryObj } from '@storybook/react';

const ImageEditorComponent = (
	props: Omit<TImageEditorProps, 'value' | 'onChange'>,
) => {
	const [file, setFile] = useState<Blob>();
	const [editedImage, setEditedImage] = useState<TEditedImageType>();

	return (
		<>
			<FilePicker onChange={(v) => setFile(v?.[0])}>
				<Avatar file={editedImage?.blob} size={200} />
			</FilePicker>
			<ImageEditor
				{...props}
				file={file}
				clearFile={() => setFile(undefined)}
				onChange={setEditedImage}
			/>
		</>
	);
};

const meta = {
	title: 'Components/ImageEditor',
	component: ImageEditorComponent,
	tags: ['autodocs'],
	argTypes: {
		className: { control: false },
	},
	args: {},
} satisfies Meta<typeof ImageEditor>;

export default meta;

export const Default: StoryObj<typeof meta> = {
	args: {
		file: undefined,
	},
};

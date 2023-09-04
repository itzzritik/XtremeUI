import { useState } from 'react';

import { ColorPicker } from './ColorPicker';

import type { Meta, StoryObj } from '@storybook/react';
import type { AnyColor } from 'colord';

const ColorPickerComponent = () => {
	const [color, setColor] = useState<AnyColor>('#ff0000');

	return (
		<ColorPicker color={color} setColor={setColor} />
	);
};

const meta = {
	title: 'Components/ColorPicker',
	render: () => <ColorPickerComponent />,
	tags: [],
	argTypes: {
		className: { control: false },
	},
	args: {

	},
} satisfies Meta<typeof ColorPicker>;

export default meta;

export const Default: StoryObj<typeof meta> = {
	args: {

	},
};

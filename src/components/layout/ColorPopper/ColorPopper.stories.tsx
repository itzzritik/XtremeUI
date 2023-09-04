import { useState } from 'react';

import { ColorPopper } from './ColorPopper';

import type { Meta, StoryObj } from '@storybook/react';
import type { AnyColor } from 'colord';

const ColorPickerComponent = () => {
	const [color, setColor] = useState<AnyColor>('#ff0000');

	return (
		<ColorPopper color={color} setColor={setColor} />
	);
};

const meta = {
	title: 'Layouts/ColorPopper',
	render: () => <ColorPickerComponent />,
	tags: [],
	argTypes: {
		className: { control: false },
	},
	args: {

	},
} satisfies Meta<typeof ColorPopper>;

export default meta;

export const Default: StoryObj<typeof meta> = {
	args: {

	},
};

import { useState } from 'react';

import { ColorPopper } from './ColorPopper';
import { TColorPopperProps } from './types';

import type { Meta, StoryObj } from '@storybook/react';
import type { AnyColor } from 'colord';

const ColorPickerComponent = (props: Omit<TColorPopperProps, 'color' | 'setColor'>) => {
	const [color, setColor] = useState<AnyColor>('#ff0000');
	return (
		<ColorPopper {...props} color={color} setColor={setColor} />
	);
};

const meta = {
	title: 'Components/ColorPopper',
	component: ColorPickerComponent,
	tags: [],
	argTypes: {
		className: { control: false },
		popperClassName: { control: false },
		showReset: {
			defaultValue: { summary: true },
		},
	},
	args: {
		showReset: true,
	},
} satisfies Meta<typeof ColorPopper>;

export default meta;

export const Default: StoryObj<typeof meta> = {
	args: {

	},
};

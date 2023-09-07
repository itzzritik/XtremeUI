import { useState } from 'react';

import { ColorPopper } from './ColorPopper';
import { TColorPopperProps } from './types';

import type { Meta, StoryObj } from '@storybook/react';
import type { AnyColor } from 'colord';

const defaultColor = '#ff0000';
const ColorPickerComponent = (props: Omit<TColorPopperProps, 'color' | 'setColor'>) => {
	const [color, setColor] = useState<AnyColor>(defaultColor);
	return (
		<ColorPopper {...props} color={color} setColor={setColor} onReset={() => setColor(defaultColor)} />
	);
};

const meta = {
	title: 'Layouts/ColorPopper',
	component: ColorPickerComponent,
	tags: [],
	argTypes: {
		className: { control: false },
		showReset: {
			defaultValue: { summary: false },
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

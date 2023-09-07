import { useState } from 'react';

import { ColorPicker } from './ColorPicker';
import { TColorPickerProps } from './types';

import type { Meta, StoryObj } from '@storybook/react';
import type { HsvaColor } from 'colord';

const ColorPickerComponent = (props: Omit<TColorPickerProps, 'color' | 'setColor'>) => {
	const [color, setColor] = useState<HsvaColor>({ h: 0, s: 0, v: 100, a: 1 });
	return (
		<ColorPicker {...props} color={color} setColor={setColor} />
	);
};

const meta = {
	title: 'Components/ColorPicker',
	component: ColorPickerComponent,
	tags: [],
	argTypes: {
		className: { control: false },
		shade: {
			defaultValue: { summary: true },
		},
		alpha: {
			defaultValue: { summary: true },
		},
	},
	args: {
		shade: true,
		alpha: true,
	},
} satisfies Meta<typeof ColorPicker>;

export default meta;

export const Default: StoryObj<typeof meta> = {
	args: {

	},
};

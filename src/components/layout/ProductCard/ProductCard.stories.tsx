import { ProductCard } from './ProductCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Layouts/Product Card',
	component: ProductCard,
	tags: ['autodocs'],
	argTypes: {
		className: { control: false },
		iconType: {
			defaultValue: { summary: 'brand' },
		},
	},
	args: {
		icon: 'f179',
		title: 'Apple',
	},
} satisfies Meta<typeof ProductCard>;

export default meta;

export const Default: StoryObj<typeof meta> = {
	args: {
	},
};

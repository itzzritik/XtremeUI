import { ActionCard } from './ActionCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Components/Action Card',
	component: ActionCard,
	tags: ['autodocs'],
	argTypes: {
		className: { control: false },
		size: {
			defaultValue: { summary: 'default' },
		},
	},
	args: {
		size: 'default',
		icon: 'f09b',
		title: 'Github',
		iconType: 'brand',
	},
} satisfies Meta<typeof ActionCard>;

export default meta;

export const Default: StoryObj<typeof meta> = {
	args: {
	},
};

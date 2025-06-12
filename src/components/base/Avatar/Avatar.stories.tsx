import { Avatar } from './Avatar';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
	title: 'Components/Avatar',
	component: Avatar,
	tags: ['autodocs'],
	argTypes: {
		className: { control: false },
		size: {
			control: { type: 'range', min: 32, max: 512, step: 16 },
			defaultValue: { summary: 64 },
		},
	},
	args: {
		size: 64,
	},
} satisfies Meta<typeof Avatar>;

export default meta;

export const Default: StoryObj<typeof meta> = {
	args: {
		src: 'https://avatars.githubusercontent.com/u/24320496?v=4',
		size: 256,
	},
};

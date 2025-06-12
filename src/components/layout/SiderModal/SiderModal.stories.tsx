import { SiderModal } from './SiderModal';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
	title: 'Layouts/SiderModal',
	component: SiderModal,
	tags: ['autodocs'],
	argTypes: {
		className: { control: false },
	},
	args: {
		title: 'Demo Modal',
	},
} satisfies Meta<typeof SiderModal>;

export default meta;

export const Default: StoryObj<typeof meta> = {
	args: {
		title: 'Demo Modal',
		icon: 'f890',
		primaryButtonProps: {
			label: 'Save',
		},
		secondaryButtonProps: {
			label: 'Cancel',
		},
	},
};

import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Components/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		className: { control: false },
		onClick: { control: false },
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		type: 'primary',
		label: 'Submit',
		size: 'default',
	},
};
export const PrimaryDanger: Story = {
	args: {
		type: 'primaryDanger',
		label: 'Delete',
		size: 'default',
	},
};
export const Secondary: Story = {
	args: {
		type: 'secondary',
		label: 'Cancel',
		size: 'default',
	},
};
export const SecondaryDanger: Story = {
	args: {
		type: 'secondaryDanger',
		label: 'Block',
		size: 'default',
	},
};
export const Link: Story = {
	args: {
		type: 'link',
		label: 'Click here',
		size: 'default',
	},
};
export const LinkDanger: Story = {
	args: {
		type: 'linkDanger',
		label: 'Remove post',
		size: 'default',
	},
};

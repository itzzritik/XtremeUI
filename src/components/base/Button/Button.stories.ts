import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Components/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {

	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		type: 'primary',
		label: 'Submit',
	},
};
export const PrimaryDanger: Story = {
	args: {
		type: 'primaryDanger',
		label: 'Delete',
	},
};
export const Secondary: Story = {
	args: {
		type: 'secondary',
		label: 'Cancel',
	},
};
export const SecondaryDanger: Story = {
	args: {
		type: 'secondaryDanger',
		label: 'Block',
	},
};
export const Link: Story = {
	args: {
		type: 'link',
		label: 'Click here',
	},
};
export const LinkDanger: Story = {
	args: {
		type: 'linkDanger',
		label: 'Remove post',
	},
};

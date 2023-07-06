import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Components/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		className: { control: false },
		onClick: { control: false },
		size: {
			defaultValue: { summary: 'default' },
		},
		iconPosition: {
			defaultValue: { summary: 'left' },
		},
		iconFilled: {
			defaultValue: { summary: false },
		},
	},
	args: {
		disabled: false,
		loading: false,
		iconPosition: 'left',
		iconFilled: false,
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
export const PrimaryWithIcon: Story = {
	args: {
		type: 'primary',
		label: 'Download',
		size: 'default',
		iconName: 'download',
	},
};
export const PrimaryDisabled: Story = {
	args: {
		type: 'primary',
		size: 'default',
		label: 'Send',
		iconName: 'send',
		iconFilled: true,
		disabled: true,
	},
};
export const PrimaryLoading: Story = {
	args: {
		type: 'primary',
		size: 'default',
		iconName: 'upload',
		label: 'Upload',
		loading: true,
	},
};
export const PrimaryIconButton: Story = {
	args: {
		type: 'primary',
		size: 'default',
		iconName: 'settings',
	},
};
export const PrimaryIconButtonDisabled: Story = {
	args: {
		type: 'primary',
		size: 'default',
		iconName: 'shopping_cart',
		disabled: true,
	},
};
export const PrimaryIconButtonLoading: Story = {
	args: {
		type: 'primary',
		size: 'default',
		iconName: 'power_settings_new',
		loading: true,
	},
};
export const PrimaryDanger: Story = {
	args: {
		type: 'primaryDanger',
		label: 'Delete',
		size: 'default',
		iconName: 'delete',
	},
};
export const Secondary: Story = {
	args: {
		type: 'secondary',
		label: 'Cancel',
		size: 'default',
	},
};
export const SecondaryWithIcon: Story = {
	args: {
		type: 'secondary',
		label: 'Add to Favorites',
		size: 'default',
		iconName: 'star',
	},
};
export const SecondaryDisabled: Story = {
	args: {
		type: 'secondary',
		size: 'default',
		label: 'Report',
		iconName: 'report',
		disabled: true,
	},
};
export const SecondaryLoading: Story = {
	args: {
		type: 'secondary',
		size: 'default',
		label: 'Extract',
		iconName: 'folder_zip',
		loading: true,
	},
};
export const SecondaryIconButton: Story = {
	args: {
		type: 'secondary',
		size: 'default',
		iconName: 'chat',
	},
};
export const SecondaryIconButtonDisabled: Story = {
	args: {
		type: 'secondary',
		size: 'default',
		iconName: 'vpn_key',
		disabled: true,
	},
};
export const SecondaryIconButtonLoading: Story = {
	args: {
		type: 'secondary',
		size: 'default',
		iconName: 'autorenew',
		loading: true,
	},
};
export const SecondaryDanger: Story = {
	args: {
		type: 'secondaryDanger',
		label: 'Block',
		size: 'default',
		iconName: 'block',
	},
};
export const Link: Story = {
	args: {
		type: 'link',
		label: 'Click here',
		size: 'default',
	},
};
export const LinkWithIcon: Story = {
	args: {
		type: 'link',
		label: 'hi@ritik.me',
		size: 'default',
		iconName: 'mail',
	},
};
export const LinkDanger: Story = {
	args: {
		type: 'linkDanger',
		label: 'Remove post',
		size: 'default',
	},
};

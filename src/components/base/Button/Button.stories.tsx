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

export const Primary: StoryObj<typeof meta> = {
	args: {
		type: 'primary',
		label: 'Submit',
		size: 'default',
	},
};
export const PrimaryWithIcon: StoryObj<typeof meta> = {
	args: {
		type: 'primary',
		label: 'Download',
		size: 'default',
		iconName: 'download',
	},
};
export const PrimaryDisabled: StoryObj<typeof meta> = {
	args: {
		type: 'primary',
		size: 'default',
		label: 'Send',
		iconName: 'send',
		iconFilled: true,
		disabled: true,
	},
};
export const PrimaryLoading: StoryObj<typeof meta> = {
	args: {
		type: 'primary',
		size: 'default',
		iconName: 'upload',
		label: 'Upload',
		loading: true,
	},
};
export const PrimaryIconButton: StoryObj<typeof meta> = {
	args: {
		type: 'primary',
		size: 'default',
		iconName: 'settings',
	},
};
export const PrimaryIconButtonDisabled: StoryObj<typeof meta> = {
	args: {
		type: 'primary',
		size: 'default',
		iconName: 'shopping_cart',
		disabled: true,
	},
};
export const PrimaryIconButtonLoading: StoryObj<typeof meta> = {
	args: {
		type: 'primary',
		size: 'default',
		iconName: 'power_settings_new',
		loading: true,
	},
};
export const PrimaryDanger: StoryObj<typeof meta> = {
	args: {
		type: 'primaryDanger',
		label: 'Delete',
		size: 'default',
		iconName: 'delete',
	},
};
export const Secondary: StoryObj<typeof meta> = {
	args: {
		type: 'secondary',
		label: 'Cancel',
		size: 'default',
	},
};
export const SecondaryWithIcon: StoryObj<typeof meta> = {
	args: {
		type: 'secondary',
		label: 'Add to Favorites',
		size: 'default',
		iconName: 'star',
	},
};
export const SecondaryDisabled: StoryObj<typeof meta> = {
	args: {
		type: 'secondary',
		size: 'default',
		label: 'Report',
		iconName: 'report',
		disabled: true,
	},
};
export const SecondaryLoading: StoryObj<typeof meta> = {
	args: {
		type: 'secondary',
		size: 'default',
		label: 'Extract',
		iconName: 'folder_zip',
		loading: true,
	},
};
export const SecondaryIconButton: StoryObj<typeof meta> = {
	args: {
		type: 'secondary',
		size: 'default',
		iconName: 'chat',
	},
};
export const SecondaryIconButtonDisabled: StoryObj<typeof meta> = {
	args: {
		type: 'secondary',
		size: 'default',
		iconName: 'vpn_key',
		disabled: true,
	},
};
export const SecondaryIconButtonLoading: StoryObj<typeof meta> = {
	args: {
		type: 'secondary',
		size: 'default',
		iconName: 'autorenew',
		loading: true,
	},
};
export const SecondaryDanger: StoryObj<typeof meta> = {
	args: {
		type: 'secondaryDanger',
		label: 'Block',
		size: 'default',
		iconName: 'block',
	},
};
export const Link: StoryObj<typeof meta> = {
	args: {
		type: 'link',
		label: 'Click here',
		size: 'default',
	},
};
export const LinkWithIcon: StoryObj<typeof meta> = {
	args: {
		type: 'link',
		label: 'hi@ritik.me',
		size: 'default',
		iconName: 'mail',
	},
};
export const LinkDanger: StoryObj<typeof meta> = {
	args: {
		type: 'linkDanger',
		label: 'Remove post',
		size: 'default',
	},
};

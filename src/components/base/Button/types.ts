import { MouseEvent } from 'react';

export type TButtonProps = {
	className?: string;
	type?: keyof typeof EButtonTypes;
	size?: keyof typeof EButtonSize;
	loading?: boolean;
	disabled?: boolean;
	iconFilled?: boolean;
	iconPosition?: 'left' | 'right';
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
} & ({
	label: string;
	iconName?: string;
} | {
	label?: string;
	iconName: string;
})

export enum EButtonTypes {
	primary = 'primary',
	primaryDanger = 'primaryDanger',
	secondary = 'secondary',
	secondaryDanger = 'secondaryDanger',
	link = 'link',
	linkDanger = 'linkDanger',
}

enum EButtonSize {
	mini = 'mini',
	default = 'default',
	large = 'large',
}

import { HTMLAttributes, MouseEvent } from 'react';

interface BaseButton extends HTMLAttributes<HTMLButtonElement> {
	className?: string;
	type?: keyof typeof EButtonTypes;
	size?: keyof typeof EButtonSize;
	loading?: boolean;
	disabled?: boolean;
	iconFilled?: boolean;
	iconPosition?: 'left' | 'right';
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
interface ButtonWithLabel extends BaseButton {
	label: string;
	iconName?: string;
}
interface ButtonWithIconName extends BaseButton {
	label?: string;
	iconName: string;
}
export type TButtonProps = ButtonWithLabel | ButtonWithIconName;

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

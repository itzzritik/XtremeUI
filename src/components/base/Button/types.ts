import { CSSProperties, HTMLAttributes } from 'react';

import { EIconType } from '../Icon/types';

export enum EButtonSize {
	mini = 'mini',
	default = 'default',
	large = 'large',
}
interface BaseButton extends HTMLAttributes<HTMLButtonElement> {
	className?: string;
	style?: CSSProperties;
	type?: keyof typeof EButtonTypes;
	size?: keyof typeof EButtonSize;
	loading?: boolean;
	disabled?: boolean;
	iconType?: keyof typeof EIconType;
	iconPosition?: 'left' | 'right';
	onClick?: () => void;
}
interface ButtonWithLabel extends BaseButton {
	label: string;
	icon?: string;
}
interface ButtonWithIconName extends BaseButton {
	label?: string;
	icon: string;
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

import { MouseEvent } from 'react';

interface IButtonBaseProps {
	className?: string;
	type?: keyof typeof EButtonTypes;
	size?: keyof typeof EButtonSize;
	label?: string;
	iconName?: string;
	loading?: boolean;
	disabled?: boolean;
	iconFilled?: boolean;
	iconPosition?: 'left' | 'right';
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
type RequireProperty<T, Prop extends keyof T> = T & {[key in Prop]-?:T[key]};
export type TButtonProps = RequireProperty<IButtonBaseProps, 'label'> | RequireProperty<IButtonBaseProps, 'iconName'>;

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

import { type AnyColor } from 'colord';

export type TColorPopperProps = {
	className?: string;
	placeholder?: string;
	showReset?: boolean;
	onReset?: () => void;
	color: AnyColor;
	setColor: (color: AnyColor) => void;
}

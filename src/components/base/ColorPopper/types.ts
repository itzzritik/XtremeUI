import { type AnyColor } from 'colord';

export type TColorPopperProps = {
	className?: string;
	popperClassName?: string;
	placeholder?: string;
	showReset?: boolean;
	alpha?: boolean;
	shade?: boolean;
	color: AnyColor;
	setColor: (col: AnyColor) => void;
}

import { type AnyColor } from 'colord';

export type TColorPopperProps = {
	className?: string;
	placeholder?: string;
	showReset?: boolean;
	color: AnyColor;
	setColor: (color: AnyColor) => void;
}

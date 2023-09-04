import { type AnyColor } from 'colord';

export type TColorPopperProps = {
	className?: string;
	placeholder?: string;
	color: AnyColor;
	setColor: (color: AnyColor) => void;
}

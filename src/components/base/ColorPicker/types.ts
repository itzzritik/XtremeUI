import type { AnyColor } from 'colord';

export type TColorPickerProps = {
	className?: string;
	color: AnyColor;
	setColor: (color: AnyColor) => void;
}

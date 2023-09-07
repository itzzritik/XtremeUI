import type { HsvaColor } from 'colord';

export type TColorPickerProps = {
	className?: string;
	alpha?: boolean;
	shade?: boolean;
	color: HsvaColor;
	setColor: (col: HsvaColor) => void;
}

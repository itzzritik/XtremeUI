import type { HslColor, RgbColor, HsvColor, RgbaColor, AnyColor } from 'colord';

export type ExtractColorType<T> = T extends RgbColor
	? RgbColor
	: T extends RgbaColor
	? RgbaColor
	: T extends HslColor
	? HslColor
	: T extends HsvColor
	? HsvColor
	: AnyColor;

export type TColorPopperProps<T extends AnyColor = AnyColor> = {
	className?: string;
	popperClassName?: string;
	placeholder?: string;
	showReset?: boolean;
	alpha?: boolean;
	shade?: boolean;
	swatch?: T[];
	color: T;
	setColor: (col: ExtractColorType<T>) => void;
};

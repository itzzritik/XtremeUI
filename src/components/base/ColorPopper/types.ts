import { TThemeScheme } from '#components/context/Theme/types';

import type { HslColor, RgbColor, HsvColor, RgbaColor, AnyColor } from 'colord';

export enum EColorPopperSize {
	mini = 'mini',
	default = 'default',
}

export type ColorPopperInput = 'button' | 'buttonLabel' | 'textfield';

export type ExtractColorType<T> = T extends RgbColor
	? RgbColor : T extends RgbaColor ? RgbaColor : T extends HslColor
	? HslColor : T extends HsvColor ? HsvColor : AnyColor;

export type TColorPopperProps<T extends AnyColor = AnyColor> = {
	className?: string;
	popperClassName?: string;
	input?: ColorPopperInput;
	size?: keyof typeof EColorPopperSize;
	placeholder?: string;
	colorHeading?: string;
	schemeHeading?: string;
	themeScheme?: TThemeScheme | undefined,
	setThemeScheme?: (scheme: TThemeScheme | undefined) => void,
	showReset?: boolean;
	alpha?: boolean;
	shade?: boolean;
	hideWheel?: boolean;
	swatch?: T[];
	color: T;
	setColor: (col: ExtractColorType<T>) => void;
};

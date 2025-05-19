import namer from 'color-namer';
import { colord } from 'colord';

import { ThemeColorsPreset, TThemeColor } from '#components/context/Theme/types';

export const guessClosestColorName = (color: TThemeColor) => {
	const hex = colord(color).toHex();
	const nameGroups = namer(hex);

	let closest = null;
	for (const c of nameGroups.ntc)
		if (!closest || c.distance < closest.distance)
			closest = c;

	return closest?.name || undefined;
};

export function getColorLabel (c?: TThemeColor): string | undefined {
	if (!c) return undefined;
	for (const [label, preset] of Object.entries(ThemeColorsPreset))
		if (c.h === preset.h && c.s === preset.s && c.l === preset.l)
			return label;
	return guessClosestColorName(c);
}

export const isValidThemeColor = (c?: TThemeColor): boolean =>
	!!c && typeof c.h === 'number' && typeof c.s === 'number' && typeof c.l === 'number';

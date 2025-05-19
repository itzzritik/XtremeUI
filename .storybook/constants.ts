import { ThemeColorsPreset } from '../src/components/context/Theme/types';

export const ThemeList = [
	{ name: 'Dark', value: '#000000' },
	{ name: 'Light', value: '#FFFFFF' },
];

export const BrandColorList = Object.entries(ThemeColorsPreset).map(([name, c]) => ({
	title: name.charAt(0).toUpperCase() + name.slice(1),
	value: name,
	color: c,
	right: `${c.h}, ${c.s}%, ${c.l}%`,
}));

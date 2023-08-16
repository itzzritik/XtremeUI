import { useEffect } from 'react';

import { STORAGE } from '#utils/constants/commons';
import { doc } from '#utils/index';

import { TStateHook } from './type';
import { usePersistingState } from './usePersistingState';

export const applyTheme = (theme: TTheme) => {
	doc?.documentElement?.setAttribute('data-theme-scheme', theme?.scheme);
	doc?.documentElement?.setAttribute('data-theme-color', theme?.color);
};
export const useTheme = (initialTheme: TTheme): TStateHook<TTheme> => {
	const [theme, setTheme] = usePersistingState<TTheme>(STORAGE.theme, initialTheme);

	useEffect(() => {
		applyTheme(theme);
	}, [theme]);

	return [theme, setTheme];
};

enum EScheme {
	light = 'light',
	dark = 'dark',
	system = 'system',
}
export type TScheme = keyof typeof EScheme;
export enum EColor {
	red = 'red',
	pink = 'pink',
	orange = 'orange',
	blue = 'blue',
	violet = 'violet',
	black = 'black',
}
export type TColor = keyof typeof EColor;

export type TTheme = {
	scheme: TScheme;
	color: TColor;
}
export const defaultTheme = {
	scheme: EScheme.system,
	color: EColor.red,
};

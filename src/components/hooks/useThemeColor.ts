import { useEffect } from 'react';

import { STORAGE } from '#utils/constants/commons';

import { TStateHook } from './type';
import { usePersistingState } from './usePersistingState';

export const useThemeColor = (defaultColor: TThemeColor): TStateHook<TThemeColor> => {
	const [themeColor, setThemeColor] = usePersistingState<TThemeColor>(STORAGE.themeColor, defaultColor);

	useEffect(() => {
		const body = document.querySelector('body');
		if (body) body.setAttribute('data-theme-color', themeColor);
	}, [themeColor]);

	return [themeColor, setThemeColor];
};

export enum EThemeColor {
	red = 'red',
	pink = 'pink',
	orange = 'orange',
	blue = 'blue',
	violet = 'violet',
	black = 'black',
}
export type TThemeColor = keyof typeof EThemeColor;

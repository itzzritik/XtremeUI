import { useEffect } from 'react';

import { addons } from '@storybook/preview-api';

import { useXTheme } from '../src/components/context/useContext';

import { BrandColorList, ThemeList } from './constants';

export const ThemeController = () => {
	const { setThemeScheme, setThemeColor } = useXTheme();

	useEffect(() => {
		addons.getChannel().on('updateGlobals', (args) => {
			const globals = args?.globals;
			console.log('globals', globals?.brand);
			const background = ThemeList.find((color) => color.value === globals?.backgrounds?.value);
			const backgroundName = background?.name?.toLowerCase();
			const themeColor = BrandColorList.find((i) => i.value === globals?.brand)?.color;

			if (backgroundName === 'light' || backgroundName === 'dark') setThemeScheme(backgroundName);
			else if (globals?.backgrounds?.value === 'transparent') setThemeScheme('system');
			if (themeColor) setThemeColor(themeColor);
		});
	}, [setThemeColor, setThemeScheme]);
	return null;
};

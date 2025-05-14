import { useEffect } from 'react';

import { addons } from '@storybook/preview-api';

import { useXTheme } from '../src/components/context/useContext';

import { ThemeList } from './constants';

export const ThemeController = () => {
	const { setThemeScheme, setThemeColor } = useXTheme();

	useEffect(() => {
		addons.getChannel().on('updateGlobals', (args) => {
			const globals = args?.globals;
			const background = ThemeList.find((color) => color.value === globals?.backgrounds?.value);
			const backgroundName = background?.name?.toLowerCase();

			if (backgroundName === 'light' || backgroundName === 'dark') setThemeScheme(backgroundName);
			else if (globals?.backgrounds?.value === 'transparent') setThemeScheme('system');
			if (args?.globals?.brand) setThemeColor(args.globals.brand);
		});
	}, [setThemeColor, setThemeScheme]);
	return null;
};

import { forwardRef } from 'react';

import clsx from 'clsx';

import { ColorPopper } from '#components/base/ColorPopper/ColorPopper';
import { useXTheme } from '#components/context/useContext';
import { useScreenType } from '#components/hooks/useScreen';
import { isValidThemeColor } from '#utils/helper/colorHelper';
import { ThemeColorsPreset } from '#utils/index';

import './themeSelect.scss';
import { TThemeSelectProps } from './types';

export const ThemeSelect = forwardRef<HTMLDivElement, TThemeSelectProps>((props, ref) => {
	const { className, input, size, withScheme = true, withSwatch = true, withWheel = true } = props;
	const { themeScheme, setThemeScheme, themeColor, setThemeColor } = useXTheme();
	const s = useScreenType();

	const mainClass = clsx(
		'xtrThemeSelect',
		className,
	);

	if (!themeColor || !isValidThemeColor(themeColor)) return null;

	return (
		<ColorPopper
			ref={ref}
			className={mainClass}
			placeholder='Theme'
			alpha={false}
			hideWheel={!withWheel}
			swatch={withSwatch ? Object.values(ThemeColorsPreset) : undefined}
			colorHeading='Theme Color'
			schemeHeading={withScheme ? 'Appearance' : undefined}
			themeScheme={themeScheme}
			input={input ? input : s.isMobile ? 'button' : 'textfield'}
			size={size ? size : s.isMobile ? 'mini' : 'default'}
			setThemeScheme={setThemeScheme}
			color={themeColor}
			setColor={setThemeColor}
		/>
	);
});

ThemeSelect.displayName = 'ThemeSelect';

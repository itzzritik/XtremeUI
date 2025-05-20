import { forwardRef } from 'react';

import clsx from 'clsx';

import { ColorPopper } from '#components/base/ColorPopper/ColorPopper';
import { useXTheme } from '#components/context/useContext';
import { isValidThemeColor } from '#utils/helper/colorHelper';

import './themeSelect.scss';
import { TThemeSwitchProps } from './types';

export const ThemeSelect = forwardRef<HTMLDivElement, TThemeSwitchProps>((props, ref) => {
	const { className, size = 'default' } = props;

	const { themeColor, setThemeColor } = useXTheme();

	const mainClass = clsx(
		'xtrThemeSelect',
		className,
	);

	if (!themeColor || !isValidThemeColor(themeColor)) return null;

	return (
		<ColorPopper className={mainClass} placeholder='Theme' alpha={false} color={themeColor} setColor={setThemeColor} />
	);
});

ThemeSelect.displayName = 'ThemeSelect';

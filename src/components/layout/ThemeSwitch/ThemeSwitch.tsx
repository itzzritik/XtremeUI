import { forwardRef, useMemo } from 'react';

import clsx from 'clsx';

import { Button } from '#components/base/Button/Button';
import { EThemeColor } from '#components/context/Theme/types';
import { useXTheme } from '#components/context/useContext';
import { THEME_SCHEME } from '#utils/index';

import './themeSwitch.scss';
import { TThemeSwitchProps } from './types';

const THEME_COLOR = Object.values(EThemeColor);

export const ThemeSwitch = forwardRef<HTMLDivElement, TThemeSwitchProps>((props, ref) => {
	const { className, withLabel = false, type = 'secondary', size = 'default', iconType = 'solid' } = props;

	const { themeScheme, setThemeScheme, themeColor, setThemeColor } = useXTheme();

	const nextTheme = useMemo(() => {
		return THEME_SCHEME[(THEME_SCHEME.findIndex((t) => t.name === themeScheme) + 1) % THEME_SCHEME.length];
	}, [themeScheme]);

	const currentIcon = useMemo(() => {
		return THEME_SCHEME.find((t) => t.name === themeScheme)?.icon ?? '';
	}, [themeScheme]);

	const nextColor = useMemo(() => {
		return THEME_COLOR[(THEME_COLOR.findIndex((t) => t === themeColor) + 1) % THEME_COLOR.length];
	}, [themeColor]);

	const mainClass = clsx(
		'xtrThemeSwitch',
		className,
		withLabel && 'withLabel',
	);

	if (!themeScheme || !themeColor) return null;

	return (
		<div ref={ref} className={mainClass}>
			<Button
				className='xtrThemeScheme'
				type={type}
				size={size}
				icon={currentIcon}
				iconType={iconType}
				label={withLabel ? themeScheme === 'system' ? 'auto' : themeScheme : undefined}
				onClick={() => nextTheme.name && setThemeScheme(nextTheme.name)}
			/>
			<Button
				className='xtrThemeColor'
				type='primary'
				size={size}
				icon='f53f'
				iconType={iconType}
				label={withLabel ? themeColor : undefined}
				onClick={() => nextColor && setThemeColor(nextColor)}
			/>
		</div>
	);
});

ThemeSwitch.displayName = 'ThemeSwitch';

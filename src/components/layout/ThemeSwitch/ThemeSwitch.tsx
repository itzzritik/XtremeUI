'use client';

import { forwardRef, useMemo } from 'react';

import { Button } from '#components/base/Button/Button';
import { Select } from '#components/base/Select/Select';
import { EThemeColor } from '#components/context/Theme/type';
import { useXTheme } from '#components/context/useContext';
import { THEME_SCHEME } from '#utils/index';

import './themeSwitch.scss';
import { TThemeSwitchProps } from './types';

const options = Object.values(EThemeColor).map((color) => ({
	value: color,
	label: color.charAt(0).toUpperCase() + color.slice(1),
}));

export const ThemeSwitch = forwardRef<HTMLButtonElement, TThemeSwitchProps>((props, ref) => {
	const { className, withLabel = false, type = 'secondary', size = 'default', iconType = 'solid' } = props;

	const { themeScheme, setThemeScheme, themeColor, setThemeColor } = useXTheme();

	const nextTheme = useMemo(() => {
		return THEME_SCHEME[(THEME_SCHEME.findIndex((t) => t.name === themeScheme) + 1) % THEME_SCHEME.length];
	}, [themeScheme]);

	const currentIcon = useMemo(() => {
		return THEME_SCHEME.find((t) => t.name === themeScheme)?.icon ?? '';
	}, [themeScheme]);

	if (!themeScheme || !themeColor) return null;

	return (
		<>
			<Button
				ref={ref}
				className={className}
				type={type}
				size={size}
				icon={currentIcon}
				iconType={iconType}
				label={withLabel ? themeScheme === 'system' ? 'auto' : themeScheme : undefined}
				onClick={() => nextTheme.name && setThemeScheme(nextTheme.name)}
			/>
			<Select
				clearable={false}
				searchable={false}
				size={size}
				options={options}
				icon='f55d'
				placeholder='Theme'
				value={themeColor}
				onChange={setThemeColor}
			/>
		</>
	);
});

ThemeSwitch.displayName = 'ThemeSwitch';

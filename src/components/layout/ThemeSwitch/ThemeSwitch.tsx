import { forwardRef, useMemo } from 'react';

import clsx from 'clsx';

import { Button } from '#components/base/Button/Button';
import { Select } from '#components/base/Select/Select';
import { useXTheme } from '#components/context/useContext';
import { useScreenType } from '#components/hooks/useScreen';
import { getColorLabel, isValidThemeColor } from '#utils/helper/colorHelper';
import { THEME_SCHEME, ThemeColorsPreset } from '#utils/index';

import './themeSwitch.scss';
import { TThemeSwitchProps } from './types';

const OPTIONS = Object.entries(ThemeColorsPreset).map(([label, value]) => ({
	label: label.charAt(0).toUpperCase() + label.slice(1),
	value,
}));

const THEME_COLOR = Object.values(ThemeColorsPreset);

export const ThemeSwitch = forwardRef<HTMLDivElement, TThemeSwitchProps>((props, ref) => {
	const { className, type = 'secondary', size = 'default', iconType = 'solid' } = props;

	const { themeScheme, setThemeScheme, themeColor, setThemeColor } = useXTheme();
	const s = useScreenType();

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
		!s.isMobile && 'withLabel',
	);

	if (!themeScheme || !isValidThemeColor(themeColor)) return null;

	return (
		<div ref={ref} className={mainClass}>
			<Button
				className='xtrThemeScheme'
				type={type}
				size={size}
				icon={currentIcon}
				iconType={iconType}
				label={!s.isMobile ? themeScheme : undefined}
				onClick={() => nextTheme.name && setThemeScheme(nextTheme.name)}
			/>
			{
				s.isLargest ?
					<Select
						clearable={false}
						searchable={false}
						size={size}
						icon='f53f'
						iconType={iconType}
						placeholder='Theme'
						options={OPTIONS}
						value={themeColor}
						onChange={setThemeColor}
					/> :
					<Button
						className='xtrThemeColor'
						type='primary'
						size={size}
						icon='f53f'
						iconType={iconType}
						label={!s.isMobile ? getColorLabel(themeColor) : undefined}
						onClick={() => nextColor && setThemeColor(nextColor)}
					/>
			}

		</div>
	);
});

ThemeSwitch.displayName = 'ThemeSwitch';

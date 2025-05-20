import { forwardRef } from 'react';

import clsx from 'clsx';

import { ActionCard } from '#components/base/ActionCard/ActionCard';
import { Button } from '#components/base/Button/Button';
import { Icon } from '#components/base/Icon/Icon';
import { useXTheme } from '#components/context/useContext';
import { isEqual } from '#utils/function/common';
import { THEME_SCHEME, ThemeColorsPreset } from '#utils/index';

import { ThemeSelect } from '../ThemeSelect/ThemeSelect';

import './themePicker.scss';
import { EThemePickerGap, EThemePickerSize, TThemePickerProps } from './types';

const THEME_COLOR = Object.values(ThemeColorsPreset);
export const ThemePicker = forwardRef<HTMLDivElement, TThemePickerProps>((props, ref) => {
	const { className, size = 'default' } = props;

	const { themeScheme, setThemeScheme, themeColor, setThemeColor } = useXTheme();

	const ThemePickerClsx = clsx(
		'xtrThemePicker',
		className,
	);

	return (
		<div
			ref={ref}
			className={ThemePickerClsx}
			role='region'
			style={{
				['--schemeSize' as string]: `${EThemePickerSize[size]}px`,
				['--schemeGap' as string]: `${EThemePickerGap[size]}px`,
			}}
		>
			<div className='themeSchemes' role='radiogroup'>
				{
					THEME_SCHEME.map(({ name, icon }, i) => (
						<ActionCard
							key={`ThemeScheme-${name}-${i}`}
							className={clsx('themeSchemeItem', name, themeScheme === name && 'active')}
							onClick={() => setThemeScheme(name)}
						>
							<div className='design'>
								<div className='navigation'>
									{
										Array.from({ length: 6 }, (_, i) => (
											<div key={`ThemeScheme-${name}-navigation-${i}`} className='navigationItem' />
										))
									}
								</div>
								<div className='content'>
									<div className='header' />
									<div className='profile' />
								</div>
							</div>
							<div className='footer'>
								<Icon className='footerIcon' code={themeScheme === name ? 'f058' : icon} type='solid' />
								<span className='footerLabel'>{name}</span>
							</div>
						</ActionCard>
					))
				}
			</div>
			<div className={clsx('themeColors', size)} role='radiogroup'>
				{
					THEME_COLOR.map((c, i) => {
						return (
							<Button
								key={`ThemeColor-${c.h}${c.s}${c.l}-${i}`}
								className='themeColorsItem'
								size={size}
								icon='f00c'
								iconType='solid'
								style={{
									['--themeColor' as string]: `${c.h} ${c.s}% ${c.l}%`,
									color: isEqual(c, themeColor) ? 'white' : 'transparent',
								}}
								onClick={() => setThemeColor(c)}
							/>
						);
					})
				}
				<ThemeSelect />
			</div>
		</div>
	);
});

ThemePicker.displayName = 'ThemePicker';

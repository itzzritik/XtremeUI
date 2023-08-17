import { forwardRef } from 'react';

import clsx from 'clsx';

import { Button } from '#components/base/Button/Button';
import { EThemeColor, TThemeColor } from '#components/context/Theme/type';
import { useXTheme } from '#components/context/useContext';
import { capitalizeFirstLetter } from '#utils/index';

import styles from './themePicker.module.scss';
import { TThemePickerProps } from './type';

export const ThemePicker = forwardRef<HTMLDivElement, TThemePickerProps>((props, ref) => {
	const { className, size = 'large' } = props;

	const { themeColor, setThemeColor } = useXTheme();

	const ThemePickerClsx = clsx(
		styles.themePicker,
		className,
	);

	return (
		<section className={ThemePickerClsx} ref={ref} role='theme'>
			{
				Object.keys(EThemeColor).map((color, i) => {
					return (
						<Button
							key={`ThemePicker-${color}-${i}`}
							className={styles.theme}
							size={size}
							icon='f00c'
							iconType='solid'
							style={{
								['--themeColor' as string]: `var(--color${capitalizeFirstLetter(color)}Accent)`,
								color: themeColor === color ? 'white' : 'transparent',
							}}
							onClick={() => setThemeColor(color as TThemeColor)}
						/>
					);
				})
			}
		</section>
	);
});

ThemePicker.displayName = 'ThemePicker';

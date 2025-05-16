import { forwardRef } from 'react';

import clsx from 'clsx';

import { ActionCard } from '#components/base/ActionCard/ActionCard';
import { Button } from '#components/base/Button/Button';
import { Icon } from '#components/base/Icon/Icon';
import { EThemeColor, TThemeColor } from '#components/context/Theme/types';
import { useXTheme } from '#components/context/useContext';
import { capitalizeFirstLetter, THEME_SCHEME } from '#utils/index';

import styles from './themePicker.module.scss';
import { EThemePickerGap, EThemePickerSize, TThemePickerProps } from './types';

export const ThemePicker = forwardRef<HTMLDivElement, TThemePickerProps>((props, ref) => {
	const { className, size = 'default' } = props;

	const { themeScheme, setThemeScheme, themeColor, setThemeColor } = useXTheme();

	const ThemePickerClsx = clsx(
		styles.themePicker,
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
			<div className={styles.themeSchemes} role='radiogroup'>
				{
					THEME_SCHEME.map(({ name, icon }, i) => (
						<ActionCard
							key={`ThemeScheme-${name}-${i}`}
							className={clsx(styles.themeSchemeItem, styles[name], themeScheme === name && styles.active)}
							onClick={() => setThemeScheme(name)}
						>
							<div className={styles.design}>
								<div className={styles.navigation}>
									{
										Array.from({ length: 6 }, (_, i) => (
											<div key={`ThemeScheme-${name}-navigation-${i}`} className={styles.navigationItem} />
										))
									}
								</div>
								<div className={styles.content}>
									<div className={styles.header} />
									<div className={styles.profile} />
								</div>
							</div>
							<div className={styles.footer}>
								<Icon className={styles.footerIcon} code={themeScheme === name ? 'f058' : icon} type='solid' />
								<span className={styles.footerLabel}>{name}</span>
							</div>
						</ActionCard>
					))
				}
			</div>
			<div className={styles.themeColors} role='radiogroup'>
				{
					Object.keys(EThemeColor).map((color, i) => {
						return (
							<Button
								key={`ThemeColor-${color}-${i}`}
								className={styles.themeColorsItem}
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
			</div>
		</div>
	);
});

ThemePicker.displayName = 'ThemePicker';

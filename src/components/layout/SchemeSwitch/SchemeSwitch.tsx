import { forwardRef, useMemo } from 'react';

import { Button } from '#components/base/Button/Button';
import { useXTheme } from '#components/context/useContext';
import { THEME_SCHEME } from '#utils/index';

import { TSchemeSwitchProps } from './types';

export const SchemeSwitch = forwardRef<HTMLButtonElement, TSchemeSwitchProps>((props, ref) => {
	const { className, withLabel = false, type = 'secondary', size = 'default', iconType = 'solid' } = props;

	const { themeScheme, setThemeScheme } = useXTheme();

	const nextTheme = useMemo(() => {
		return THEME_SCHEME[(THEME_SCHEME.findIndex((t) => t.name === themeScheme) + 1) % THEME_SCHEME.length];
	}, [themeScheme]);

	const currentIcon = useMemo(() => {
		return THEME_SCHEME.find((t) => t.name === themeScheme)?.icon ?? '';
	}, [themeScheme]);

	return (
		<Button
			ref={ref}
			className={className}
			type={type}
			size={size}
			icon={currentIcon}
			iconType={iconType}
			label={withLabel ? `${themeScheme === 'system' ? 'auto' : themeScheme}` : undefined}
			onClick={() => setThemeScheme(nextTheme.name)}
		/>
	);
});

SchemeSwitch.displayName = 'SchemeSwitch';

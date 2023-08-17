import { TThemeColor, TThemeScheme } from '#components/context/Theme/type';

declare module '*.scss' {
	const styles: {
		readonly [key: string]: string;
	};
	export default styles;
}

declare global {
	interface Window {
		__themeScheme: TThemeScheme;
		__themeColor: TThemeColor;
		__setPreferredThemeScheme: (val: TThemeScheme) => void;
		__setPreferredThemeColor: (val: TThemeColor) => void;
		__onThemeSchemeChange: (newThemeScheme: TThemeScheme) => void;
		__onThemeColorChange: (newThemeColor: TThemeColor) => void;
	}
}

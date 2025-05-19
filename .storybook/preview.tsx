import { XProvider } from '../src/components/context';
import { defaultScheme, defaultColorPreset } from '../src/components/context/Theme/types';
import '../src/styles/index.scss';
import { STORAGE } from '../src/utils/constants/commons';
import { getLocalState } from '../src/utils/function/localStorage';
import { capitalizeFirstLetter } from '../src/utils/function/string';
import { elementObserver, localStore, waitForElement } from '../src/utils/helper/domHelper';
import { themeController } from '../src/utils/helper/themeController';

import { ThemeController } from './ThemeController';
import { BrandColorList, ThemeList } from './constants';
import './style.scss';

import type { Preview } from '@storybook/react';

eval(themeController());

const initialThemeScheme = localStore?.getItem(STORAGE.themeScheme) ?? defaultScheme;
const initialThemeColor = getLocalState(STORAGE.themeColor, defaultColorPreset);
let root: HTMLElement;

const preview: Preview = {
	globalTypes: {
		brand: {
			description: 'Select Brand Color',
			defaultValue: initialThemeColor,
			toolbar: {
				title: 'Brand Color',
				icon: 'paintbrush',
				items: BrandColorList,
				dynamicTitle: true,
			},
		},
	},
	parameters: {
		controls: {
			sort: 'requiredFirst',
			controls: {
				expanded: true,
			},
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		docs: {
			controls: {
				sort: 'requiredFirst',
			},
		},
		backgrounds: {
			default: initialThemeScheme === 'system' ? undefined : capitalizeFirstLetter(initialThemeScheme),
			values: ThemeList,
		},
	},
	decorators: [
		(Story) => {
			return (
				<XProvider>
					<ThemeController />
					<Story />
				</XProvider>
			);
		},
	],
};

waitForElement('#storybook-root').then((element) => {
	root = element;
	document.documentElement.style.setProperty('height', '100%');
	document.body.style.setProperty('height', '100%');
	document.body.style.setProperty('margin', '0');
	document.body.style.setProperty('padding', '0');
	element.style.setProperty('height', '100%');
	element.style.setProperty('padding', '16px');
});

elementObserver((element, event) => {
	if (event === 'added') root?.style.setProperty('padding', '0');
	else if (event === 'removed') root?.style.setProperty('padding', '16px');

	if (element?.classList?.[0].includes('navigation'))
		element.style.setProperty('background', 'hsl(var(--colorBrandPrimary) / 90%)');
}, ['#storybook-root > [role="region"]']);

export default preview;

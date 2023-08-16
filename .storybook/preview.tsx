import React, { useEffect } from "react";
import type { Preview } from "@storybook/react";
import { addons } from "@storybook/addons";
import { BrandColorList, ThemeList } from "./constants";
import {XProvider} from "../src/components/context";
import { elementObserver, waitForElement } from "../src/utils/helper/domHelper";
import { useXData } from "../src/components/context/useContext";
import { STORAGE } from "../src/utils/constants/commons";
import { getLocalState } from "../src/utils/function/localStorage";
import { EThemeColor } from "../src/components/hooks/useThemeColor";
import "../src/styles/index.scss";

const defaultThemeColor = getLocalState(STORAGE.themeColor, EThemeColor.violet);
let root: HTMLElement;

const ThemeController = () => {
	const {setTheme, setThemeColor} = useXData();
	useEffect(() => {
		addons.getChannel().on('updateGlobals', (args) => {		
			const globals = args?.globals;
			const background = ThemeList.find((color) => color.value === globals?.backgrounds?.value);
			const backgroundName = background?.name?.toLowerCase();
		
			if (backgroundName === 'light' || backgroundName === 'dark') setTheme(backgroundName);
			else if (globals?.backgrounds?.value === "transparent") setTheme('system');
			if (args?.globals?.brand) setThemeColor(args.globals.brand);
		});
	}, [])
	return null;
}

const preview: Preview = {
	globalTypes: {
		brand: {
			description: "Select Brand Color",
			defaultValue: defaultThemeColor,
			toolbar: {
				title: "Brand Color",
				items: BrandColorList,
				dynamicTitle: true,
			},
		},
	},
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
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
			values: ThemeList,
		},
	},
	decorators: [
		(Story) => (
			<XProvider>
				<ThemeController />
				<Story />
			</XProvider>
		),
	],
};

waitForElement("#storybook-root").then((element) => {
	root = element;
	document.documentElement.style.setProperty("height", "100%");
	document.body.style.setProperty("height", "100%");
	document.body.style.setProperty("margin", "0");
	document.body.style.setProperty("padding", "0");
	element.style.setProperty("height", "100%");
	element.style.setProperty("padding", "16px");
});

elementObserver((element, event) => {
	if (event === 'added') root?.style.setProperty("padding", "0");
	else if (event === 'removed') root?.style.setProperty("padding", "16px");

	if (element?.classList?.[0].includes("navigation"))
		element.style.setProperty("background", "rgb(var(--colorBrandAccentRgb) / 90%)");
}, ['#storybook-root > [role="sider"]', '#storybook-root > [role="navigation"]']);

export default preview;

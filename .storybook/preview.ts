import type { Preview } from "@storybook/react";
import { addons } from "@storybook/addons";
import { UPDATE_GLOBALS } from "@storybook/core-events";
import { BrandColorList, ThemeList } from "./constants";

import { elementObserver, waitForElement } from "../src/utils/helper/domHelper";
import "../src/styles/index.scss";

let theme;
let brand = "violet";
let root: HTMLElement;

const preview: Preview = {
	globalTypes: {
		brand: {
			description: "Select Brand Color",
			defaultValue: brand,
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
			controls: {
				expanded: true,
			},
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		backgrounds: {
			default: theme,
			values: ThemeList,
		},
	},
};

const setTheme = () => {
	document.body.className = `${theme?.name?.toLowerCase() ?? ""} ${brand}`;
};
addons.getChannel().on(UPDATE_GLOBALS, (args) => {
	console.log("Global config changed: ", args);

	const globals = args?.globals;
	const background = ThemeList.find((color) => color.value === globals?.backgrounds?.value);

	if (background) theme = background;
	else if (globals?.backgrounds?.value === "transparent") theme = undefined;
	if (args?.globals?.brand) brand = args.globals.brand;

	setTheme();
});

waitForElement("#storybook-root").then((element) => {
	root = element;
	document.documentElement.style.setProperty("height", "100%");
	document.body.style.setProperty("height", "100%");
	document.body.style.setProperty("margin", "0");
	document.body.style.setProperty("padding", "0");
	element.style.setProperty("height", "100%");
	element.style.setProperty("padding", "16px")
	setTheme();
});

elementObserver((element, event) => {
	if (event === 'added') root?.style.setProperty("padding", "0");
	else if (event === 'removed') root?.style.setProperty("padding", "16px");

	if (element?.classList?.[0].includes("navigation"))
		element.style.setProperty("background", "rgb(var(--colorBrandAccentRgb) / 90%)");
}, ['#storybook-root > [role="sider"]', '#storybook-root > [role="navigation"]']);

export default preview;

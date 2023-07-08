import type { Preview } from "@storybook/react";
import { addons } from "@storybook/addons";
import { UPDATE_GLOBALS } from "@storybook/core-events";
import "../src/utils/helper/fontHelper";
import "../src/components/variables.scss";
import { waitForElement } from "../src/utils/helper/domHelper";
import { BrandColorList, ThemeList } from "./constants";

let body: HTMLElement;
let theme;
let brand = "violet";

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
	body.style.setProperty("margin", "0");
	body.style.setProperty("padding", "16px");
};
addons.getChannel().on(UPDATE_GLOBALS, (args) => {
	console.log("Global config changed: ", args);

	const background = ThemeList.find(
		(color) => color.value === args?.globals?.backgrounds?.value
	);
	if (background) theme = background;
	else if (args?.globals?.backgrounds?.value === 'transparent') theme = undefined;
	if (args?.globals?.brand) brand = args.globals.brand;

	setTheme();
});

waitForElement("body").then((element) => {
	body = element as HTMLElement;
	setTheme();
});
export default preview;

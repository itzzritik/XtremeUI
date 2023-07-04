import type { Preview } from "@storybook/react";
import { addons } from "@storybook/addons";
import { UPDATE_GLOBALS } from "@storybook/core-events";
import { ColorList } from "./constants";
import '../src/utils/helper/fontHelper';
import "../src/components/variables.scss";

let originalBodyClass;
const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		backgrounds: {
			default: "light-violet",
			values: ColorList,
		},
	},
};

const setDefaultColor = () => {
	document.body.className = `${originalBodyClass} light violet`;
}
addons.getChannel().on(UPDATE_GLOBALS, (args) => {
	console.log("Global theme changed: ", args.globals.backgrounds.value);
	const background = ColorList.find((color) => color.value === args.globals.backgrounds.value);

	if (background === undefined) return setDefaultColor();

	const [theme, color] = background.name.split("-");
	document.body.className = `${originalBodyClass} ${theme} ${color}`;
});

setTimeout(() => {
	originalBodyClass = document.body.className;
	setDefaultColor();
}, 1000);

export default preview;

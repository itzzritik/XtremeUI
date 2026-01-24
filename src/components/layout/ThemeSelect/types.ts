import type { ICON_TYPES } from "gliff";

import type { ColorPopperInput, EColorPopperSize } from "#components/base/ColorPopper/types";

export type TThemeSelectProps = {
	className?: string;
	input?: ColorPopperInput;
	size?: keyof typeof EColorPopperSize;
	withScheme?: boolean;
	withSwatch?: boolean;
	withWheel?: boolean;
	iconType?: keyof typeof ICON_TYPES;
};

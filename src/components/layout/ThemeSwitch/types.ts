import type { EButtonSize, EButtonTypes, TClassicIconType } from "../../base/Button/types";

export type TThemeSwitchProps = {
	className?: string;
	withLabel?: boolean;
	type?: keyof typeof EButtonTypes;
	size?: keyof typeof EButtonSize;
	iconType?: TClassicIconType;
};

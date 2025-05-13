import { EIconType } from "#components/base/Icon/types";
import { EButtonSize, EButtonTypes } from "../../base/Button/types";

export type TSchemeSwitchProps = {
	className?: string;
	withLabel?: boolean;
	type?: keyof typeof EButtonTypes;
	size?: keyof typeof EButtonSize;
	iconType?: keyof typeof EIconType;
}

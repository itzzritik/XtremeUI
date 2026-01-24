import { ICON_TYPES } from 'gliff';

import { EButtonSize, EButtonTypes } from '../../base/Button/types';

export type TThemeSwitchProps = {
	className?: string;
	withLabel?: boolean;
	type?: keyof typeof EButtonTypes;
	size?: keyof typeof EButtonSize;
	iconType?: keyof typeof ICON_TYPES;
};

import { EIconType } from '#components/base/Icon/types';

import { EButtonSize } from '../../base/Button/types';

export type TThemeSwitchProps = {
	className?: string;
	withLabel?: boolean;
	withSwatch?: boolean;
	size?: keyof typeof EButtonSize;
	iconType?: keyof typeof EIconType;
}

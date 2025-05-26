import { ColorPopperInput, EColorPopperSize } from '#components/base/ColorPopper/types';
import { EIconType } from '#components/base/Icon/types';

export type TThemeSelectProps = {
	className?: string;
	input?: ColorPopperInput;
	size?: keyof typeof EColorPopperSize;
	withScheme?: boolean;
	withSwatch?: boolean;
	iconType?: keyof typeof EIconType;
}

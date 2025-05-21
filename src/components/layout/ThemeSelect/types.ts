import { EColorPopperSize } from '#components/base/ColorPopper/types';
import { EIconType } from '#components/base/Icon/types';

export type TThemeSelectProps = {
	className?: string;
	size?: keyof typeof EColorPopperSize;
	withScheme?: boolean;
	withSwatch?: boolean;
	iconType?: keyof typeof EIconType;
}

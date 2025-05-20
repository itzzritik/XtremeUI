import { EIconType } from '#components/base/Icon/types';

export type TThemeSelectProps = {
	className?: string;
	withLabel?: boolean;
	withSwatch?: boolean;
	iconType?: keyof typeof EIconType;
}

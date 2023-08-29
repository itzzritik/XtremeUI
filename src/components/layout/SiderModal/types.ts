import { ReactNode } from 'react';

import { TButtonProps } from '#components/base/Button/types';

export type TSiderModalProps = {
	className?: string;
	children?: ReactNode;
	title: string;
	icon?: string;
	primaryButtonProps?: TButtonProps;
	secondaryButtonProps?: TButtonProps;
}

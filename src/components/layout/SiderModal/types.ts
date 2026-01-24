import type { ReactNode } from "react";

import type { TButtonProps } from "#components/base/Button/types";

export type TSiderModalProps = {
	className?: string;
	children?: ReactNode;
	title: string;
	icon?: string;
	primaryButtonProps?: TButtonProps;
	secondaryButtonProps?: TButtonProps;
};

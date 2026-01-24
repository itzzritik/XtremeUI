import type { ReactNode } from "react";

import type { TSiderModes } from "#components/layout/Sider/types";

export type TDataInitialType = {
	siderMode: TSiderModes;
	setSiderMode: (mode: TSiderModes) => void;
};
export type TDataProviderProps = {
	children?: ReactNode;
};

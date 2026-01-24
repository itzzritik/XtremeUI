import clsx from "clsx";
import { forwardRef, useRef } from "react";

import { useXData } from "#components/context/useContext";

import "./sider.scss";
import type { TSiderProps } from "./types";

export const Sider = forwardRef<HTMLDivElement, TSiderProps>((props, ref) => {
	const { className, children, leftSider, showMiniLeftSider = true, rightSider, showMiniRightSider = false } = props;

	const { siderMode } = useXData();
	const leftSiderRef = useRef<HTMLDivElement>(null);
	const rightSiderRef = useRef<HTMLDivElement>(null);

	const SiderClsx = clsx(
		"xtrSider",
		siderMode === "left" && leftSider && "leftOpen",
		showMiniLeftSider && "miniLeftSider",
		siderMode === "right" && rightSider && "rightOpen",
		showMiniRightSider && "miniRightSider",
		className,
	);

	return (
		<aside
			ref={ref}
			className={SiderClsx}
			style={{
				["--leftSiderWidth" as string]: `${leftSiderRef?.current?.clientWidth}px`,
				["--rightSiderWidth" as string]: `${rightSiderRef?.current?.clientWidth}px`,
			}}>
			<div ref={leftSiderRef} className="leftSiderContainer">
				{leftSider}
			</div>
			<div ref={rightSiderRef} className="rightSiderContainer">
				{rightSider}
			</div>
			<div className="content">{children}</div>
		</aside>
	);
});

Sider.displayName = "Sider";

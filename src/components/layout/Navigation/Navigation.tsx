import clsx from "clsx";
import { Icon } from "gliff";
import { forwardRef, useEffect, useState } from "react";

import "./navigation.scss";
import type { TNavigationProps } from "./types";

export const Navigation = forwardRef<HTMLDivElement, TNavigationProps>((props, ref) => {
	const { className, children, hrefPropName = "href", routes = [], pathname = "", as: Tag = "a" as const } = props;
	const [loading, setLoading] = useState<string>("/");

	const NavigationClsx = clsx("xtrNavigation", className);

	useEffect(() => {
		if (loading === pathname) setLoading("/");
	}, [loading, pathname]);

	return (
		<nav ref={ref} className={NavigationClsx}>
			<div className="brand">{children}</div>
			<div className="routeList">
				{routes.map((route, i) => (
					<Tag
						key={`route-${route?.href}-${i}`}
						className={clsx("route", route?.href === loading && "loading", route?.href === pathname && "active")}
						{...{ [hrefPropName]: route?.href }}
						onClick={() => {
							setTimeout(() => {
								if (loading !== pathname) setLoading(route?.href);
							}, 150);
						}}>
						{route?.icon && <Icon code={route?.icon} set={route?.href === pathname ? "duotone" : undefined} type={route?.href === pathname ? undefined : "light"} />}
						<span className="label">{route?.name}</span>
					</Tag>
				))}
			</div>
		</nav>
	);
});

Navigation.displayName = "Navigation";

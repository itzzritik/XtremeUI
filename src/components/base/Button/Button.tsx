import clsx from "clsx";
import { Icon } from "gliff";
import { forwardRef } from "react";

import { ProgressBar } from "../ProgressBar/ProgressBar";

import "./button.scss";
import { EButtonTypes, type TButtonProps } from "./types";

export const Button = forwardRef<HTMLButtonElement, TButtonProps>((props, ref) => {
	const { className, style = {}, label, type = "primary", size = "default", disabled = false, loading = false, icon, iconType, iconPosition = "left", onClick } = props;

	const iconNode = icon ? <Icon className="icon" code={icon} type={iconType} size={size} /> : null;

	const ButtonClsx = clsx("xtrButton", "shadowRipple", `${type}Type`, `${size}Size`, !label && "iconOnly", loading && "loading", className);

	if (!label && !icon) return null;

	return (
		<button ref={ref} className={ButtonClsx} style={style} onClick={onClick} disabled={disabled}>
			{type.includes(EButtonTypes.link) && <ProgressBar className={"underline"} intermediate={loading} />}
			{iconPosition === "left" && iconNode}
			{label && <span className={"label"}>{label}</span>}
			{iconPosition === "right" && iconNode}
		</button>
	);
});

Button.displayName = "Button";

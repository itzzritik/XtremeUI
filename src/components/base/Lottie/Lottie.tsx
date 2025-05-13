import { Ref, forwardRef, useEffect, useState } from "react";

import { DotLottie, DotLottieReact } from "@lottiefiles/dotlottie-react";

import clsx from "clsx";

import styles from "./lottie.module.scss";
import { ELottieSize, TLottieProps } from "./types";

export const Lottie = forwardRef<HTMLDivElement, TLottieProps>((props, ref) => {
	const {
		className,
		src,
		size = "default",
		autoPlay = true,
		loop = true,
		speed = 1,
	} = props;

	const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);

	const lottieSize = `${
		typeof size === "number" ? size : ELottieSize[size]
	}px`;
	const LottieClsx = clsx(styles.lottieWrapper, className);

	useEffect(() => {
		if (lottieSize) dotLottie?.resize();
	}, [lottieSize]);

	return (
		<div
			className={LottieClsx}
			style={{ ["--lottieSize" as string]: lottieSize }}
		>
			<DotLottieReact
				className={styles.lottie}
				dotLottieRefCallback={setDotLottie}
				src={src}
				autoplay={autoPlay}
				loop={loop}
				speed={speed}
				marker="lottie"
			/>
		</div>
	);
});

Lottie.displayName = "Lottie";

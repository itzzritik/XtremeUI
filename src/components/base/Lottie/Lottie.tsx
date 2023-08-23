import { MutableRefObject, forwardRef } from 'react';

import { DotLottiePlayer, Controls, PlayMode, DotLottieRefProps } from '@dotlottie/react-player';
import clsx from 'clsx';

import styles from './lottie.module.scss';
import { ELottieSize, TLottieProps } from './types';

export const Lottie = forwardRef<DotLottieRefProps, TLottieProps>((props, ref) => {
	const {
		className,
		src,
		size = 'default',
		controls = false,
		autoPlay = true,
		loop = true,
		speed = 1,
		direction = 1,
		playMode = PlayMode.Normal,
		renderer = 'svg',
	} = props;

	const lottieSize = `${typeof size === 'number' ? size : ELottieSize[size]}px`;
	const LottieClsx = clsx(
		styles.lottie,
		className,
	);

	return (
		<DotLottiePlayer
			lottieRef={ref as MutableRefObject<DotLottieRefProps>}
			className={LottieClsx}
			style={{ ['--lottieSize'as string]: lottieSize }}
			src={src}
			autoplay={autoPlay}
			loop={loop}
			speed={speed}
			direction={direction}
			playMode={playMode}
			renderer={renderer}
			role='img'
		>
			{controls && <Controls />}
		</DotLottiePlayer>
	);
});

Lottie.displayName = 'Lottie';

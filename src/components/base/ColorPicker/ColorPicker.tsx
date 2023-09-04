import { forwardRef, useMemo } from 'react';

import Alpha from '@uiw/react-color-alpha';
import Wheel from '@uiw/react-color-wheel';
import clsx from 'clsx';
import { Colord, colord, getFormat } from 'colord';

import styles from './colorPicker.module.scss';
import { TColorPickerProps } from './types';

import type { Input } from 'colord/types';

export const ColorPicker = forwardRef<HTMLDivElement, TColorPickerProps>((props, ref) => {
	const { className, color, setColor } = props;

	const localColor = useMemo(() => colord(color), [color]);
	const format = useMemo(() => getFormat(color as Input), [color]);

	const ColorPickerClsx = clsx(
		styles.colorPicker,
		className,
	);

	const onColorChange = (col: Colord) => {
		if (format === 'rgb') setColor?.(col.toRgb());
		if (format === 'hex') setColor?.(col.toHex());
		else if (format === 'hsl') setColor?.(col.toHsl());
		else if (format === 'hsv') setColor?.(col.toHsl());
	};

	return (
		<div
			ref={ref}
			className={ColorPickerClsx}
		>
			<Wheel
				className={styles.wheel}
				color={localColor.toHsv()}
				onChange={(col) => {
					onColorChange(colord(col.hexa));
				}}
			/>
			<Alpha
				className={styles.alpha}
				hsva={localColor.toHsv()}
				onChange={(newAlpha) => {
					onColorChange(colord({ ...localColor.toRgb(), a: newAlpha.a }));
				}}
			/>
		</div>
	);
});

ColorPicker.displayName = 'ColorPicker';

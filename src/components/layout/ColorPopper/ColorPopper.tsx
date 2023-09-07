/* eslint-disable react-hooks/exhaustive-deps */
import { forwardRef, useEffect, useMemo, useState } from 'react';

import {
	autoUpdate,
	flip,
	offset,
	shift,
	useClick,
	useDismiss,
	useFloating,
	useInteractions,
	useTransitionStyles,
} from '@floating-ui/react';
import clsx from 'clsx';
import { colord, getFormat } from 'colord';

import { ColorPicker } from '#components/base/ColorPicker/ColorPicker';
import { Icon } from '#components/base/Icon/Icon';
import { Textfield } from '#components/base/Textfield/Textfield';
import { mergeRefs } from '#utils/index';

import styles from './colorPopper.module.scss';
import { TColorPopperProps } from './types';

import type { HsvaColor, Input } from 'colord/types';

export const ColorPopper = forwardRef<HTMLDivElement, TColorPopperProps>((props, ref) => {
	const { className, placeholder = 'Color Picker', showReset = false, color, setColor } = props;

	const format = useMemo(() => getFormat(color as Input), [color]);
	const initialColor = useMemo(() => colord(color), []);
	const [localColor, setLocalColor] = useState<HsvaColor>(colord(color).toHsv());
	const [textColor, setTextColor] = useState<string>(colord(color).toHex());

	const [isOpen, setIsOpen] = useState(false);
	const { refs, floatingStyles, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
		middleware: [
			flip(),
			shift(),
			offset(({ placement }) => {
				return placement === 'bottom' ? 10 : 16;
			}),
		],
		whileElementsMounted: autoUpdate,
	});
	const { isMounted, styles: transitionStyles } = useTransitionStyles(context, {
		duration: 200,
		initial: (props) => {
			return {
				opacity: 0,
				scale: 0.9,
				translate: props?.side === 'bottom' ? '0 12px' : '0 -12px',
			};
		},
	});

	const { getReferenceProps, getFloatingProps } = useInteractions([
		useClick(context),
		useDismiss(context),
	]);

	const onTextChange = (col: string) => {
		const format = getFormat(col as Input);
		setTextColor(col);

		if (format && ((format === 'hex' && col.length > 6) || format !== 'hex')) {
			setLocalColor(colord(col).toHsv());
		}
	};

	useEffect(() => {
		const col = colord(localColor);
		if (format === 'rgb') setColor?.(col.toRgb());
		else if (format === 'hex') setColor?.(col.toHex());
		else if (format === 'hsl') setColor?.(col.toHsl());
		else if (format === 'hsv') setColor?.(col.toHsv());

	}, [format, localColor, setColor]);

	return (
		<>
			<Textfield
				className={styles.colorInput}
				ref={refs.setReference}
				placeholder={placeholder}
				icon='color'
				value={textColor}
				onChange={(e) => onTextChange(e.target.value)}
				style={{ ['--chipColor' as string]: colord(localColor).toHex() }}
				onFocus={() => setIsOpen(true)}
				{...getReferenceProps()}
			/>
			{
				isMounted &&
					<div
						ref={mergeRefs([ref, refs.setFloating])}
						className={clsx(styles.colorPopper, className)}
						style={{ ...floatingStyles, ...transitionStyles }}
						{...getFloatingProps()}
					>
						<div className={styles.header}>
							<h1>Choose a color</h1>
							{showReset &&
								<Icon code='f1da' onClick={() => {
									setLocalColor(initialColor.toHsv());
									setTextColor(initialColor.toHex());
								}}
								/>
							}
						</div>

						<ColorPicker
							color={localColor}
							setColor={(col) => {
								setLocalColor(col);
								setTextColor(colord(col).toHex());
							}}
						/>
					</div>
			}
		</>
	);
});

ColorPopper.displayName = 'ColorPopper';

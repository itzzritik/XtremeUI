import { forwardRef, useCallback, useEffect, useMemo, useState } from 'react';

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
import { Colord, colord, getFormat } from 'colord';

import { ColorPicker } from '#components/base/ColorPicker/ColorPicker';
import { Icon } from '#components/base/Icon/Icon';
import { Textfield } from '#components/base/Textfield/Textfield';
import { mergeRefs } from '#utils/index';

import styles from './colorPopper.module.scss';
import { TColorPopperProps } from './types';

import type { HsvaColor, Input } from 'colord/types';

export const ColorPopper = forwardRef<HTMLDivElement, TColorPopperProps>((props, ref) => {
	const { className, placeholder = 'Color Picker', showReset = false, onReset, color, setColor } = props;

	const format = useMemo(() => getFormat(color as Input), [color]);
	const [localColor, setLocalColor] = useState<HsvaColor>(colord(color).toHsv());
	const [textColor, setTextColor] = useState<string>();

	const [isOpen, setIsOpen] = useState(false);
	const { refs, floatingStyles, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
		middleware: [offset(16), flip(), shift()],
		whileElementsMounted: autoUpdate,
	});
	const { isMounted, styles: transitionStyles } = useTransitionStyles(context, {
		duration: 200,
		initial: (props) => {
			return {
				opacity: 0,
				scale: 0.9,
				translate: props?.side === 'bottom' ? '0 16px' : '0 -16px',
			};
		},
	});

	const { getReferenceProps, getFloatingProps } = useInteractions([
		useClick(context),
		useDismiss(context),
	]);

	const onColorChange = useCallback((col: Colord) => {
		if (format === 'rgb') return setColor?.(col.toRgb());
		if (format === 'hex') return setColor?.(col.toHex());
		if (format === 'hsl') return setColor?.(col.toHsl());
		if (format === 'hsv') return setColor?.(col.toHsv());
	}, [format, setColor]);

	const onTextChange = (color: string) => {
		const format = getFormat(color as Input);
		setTextColor(color);
		if (format && ((format === 'hex' && color.length > 6) || format !== 'hex')) onColorChange(colord(color));
	};

	useEffect(() => {
		onColorChange(colord(localColor));
	}, [localColor, onColorChange]);

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
				onBlur={() => setIsOpen(false)}
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
							{showReset && <Icon code='f1da' onClick={onReset} />}
						</div>

						<ColorPicker
							color={localColor}
							setColor={setLocalColor}
						/>
					</div>
			}
		</>
	);
});

ColorPopper.displayName = 'ColorPopper';

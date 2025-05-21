import './styles/index.scss';

export * from '#utils/index';

// Context
export { XProvider } from './components/context';
export { useXTheme, useXData } from './components/context/useContext';
export type { EThemeScheme, TThemeColor } from './components/context/Theme/types';

// ActionCard
export { ActionCard } from './components/base/ActionCard/ActionCard';
export { type TActionCardProps, EActionCardSize } from './components/base/ActionCard/types';

// Avatar
export { Avatar } from './components/base/Avatar/Avatar';
export { type TAvatarProps, EAvatarSize } from './components/base/Avatar/types';

// Button
export { Button } from './components/base/Button/Button';
export { type TButtonProps, EButtonTypes } from './components/base/Button/types';

// Icon
export { Icon } from './components/base/Icon/Icon';
export { type IIconProps, type EIconType, EIconSize } from './components/base/Icon/types';

// Lottie
export { Lottie } from './components/base/Lottie/Lottie';
export { type TLottieProps, ELottieSize } from './components/base/Lottie/types';

// ProgressBar
export { ProgressBar } from './components/base/ProgressBar/ProgressBar';
export { type IProgressBarProps } from './components/base/ProgressBar/types';

// Icon
export { Spinner } from './components/base/Spinner/Spinner';
export { type ISpinnerProps, ESpinnerSize } from './components/base/Spinner/types';

// Textfield
export { Textfield } from './components/base/Textfield/Textfield';
export { type TTextfieldProps } from './components/base/Textfield/types';

// DatePicker
export { DatePicker } from './components/base/DatePicker/DatePicker';
export { type TDatePickerProps, type TDateValue, EDatePickerTypes } from './components/base/DatePicker/types';

// FilePicker
export { FilePicker } from './components/base/FilePicker/FilePicker';
export { type TFilePickerProps, type EFilePickerAccept, FilePickerIcon } from './components/base/FilePicker/types';

// Select
export { Select } from './components/base/Select/Select';
export { type TSelectProps } from './components/base/Select/types';

// ColorPopper
export { ColorPopper } from './components/base/ColorPopper/ColorPopper';
export { type TColorPopperProps } from './components/base/ColorPopper/types';
export type { AnyColor } from 'colord';

// Sider
export { Sider } from './components/layout/Sider/Sider';
export { type TSiderProps, type TSiderModes } from './components/layout/Sider/types';

// SiderModal
export { SiderModal } from './components/layout/SiderModal/SiderModal';
export { type TSiderModalProps } from './components/layout/SiderModal/types';

// Navigation
export { Navigation } from './components/layout/Navigation/Navigation';
export { type TNavigationProps, type TNavigationRoute } from './components/layout/Navigation/types';

// ThemePicker
export { ThemePicker } from './components/layout/ThemePicker/ThemePicker';
export { type TThemePickerProps } from './components/layout/ThemePicker/types';

// ThemeSelect
export { ThemeSelect } from './components/layout/ThemeSelect/ThemeSelect';
export { type TThemeSelectProps } from './components/layout/ThemeSelect/types';

// ThemeSwitch
export { ThemeSwitch } from './components/layout/ThemeSwitch/ThemeSwitch';
export { type TThemeSwitchProps } from './components/layout/ThemeSwitch/types';

// ImageEditor
export { ImageEditor } from './components/layout/ImageEditor/ImageEditor';
export { type TImageEditorProps } from './components/layout/ImageEditor/types';

// Hooks
export { useScreenType } from './components/hooks/useScreen';
export { usePersistingState } from './components/hooks/usePersistingState';
export { useDebouncedEffect } from './components/hooks/useDebouncedEffect';
export { type TScreenType } from './components/hooks/types';

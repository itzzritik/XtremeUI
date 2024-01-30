import './styles/index.scss';

export * from '#utils/index';

// Context
export { XProvider } from './components/context';
export { useXTheme, useXData } from './components/context/useContext';

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
export { type TThemePickerProps } from './components/layout/ThemePicker/type';

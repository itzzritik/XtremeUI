import styles from './button.module.scss';

export default function Button (props: IButtonProps) {
	return (
		<button className={styles.button} />
	);
}

export interface IButtonProps {
	type: 'button' | 'submit' | 'reset';
}

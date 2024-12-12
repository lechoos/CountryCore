import styles from '../scss/buttonBaseStyles.module.scss';

type Styles = {
	baseStyles: string;
	iconStyles: string;
};

export const useButtonStyles = () => {
	const buttonStyles: Styles = {
		baseStyles: styles.button,
		iconStyles: styles.icon,
	};

	return buttonStyles;
};

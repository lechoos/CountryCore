import { useState } from 'react';

export const useHover = () => {
	const [isHovered, setIsHovered] = useState(false);

	const setTrue = () => {
		setIsHovered(true);
	};

	const setFalse = () => {
		setIsHovered(false);
	};

	return {
		hover: isHovered,
		setHover: {
			setTrue,
			setFalse,
		},
	};
};

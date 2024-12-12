import { use } from 'react';
import { useButtonStyles } from '../../hooks/useButtonStyles';
import { SunMedium, Moon, LucideIcon } from 'lucide-react';
import { ThemeContext } from '../../contexts/theme/ThemeContext';

type ButtonProps = {
	className?: string;
};

const Icon = ({ Component, className }: { Component: LucideIcon; className?: string }) => {
	return <Component className={className} />;
};

export const ThemeButton = ({ className }: ButtonProps) => {
	const { isDark, setIsDark } = use(ThemeContext)!;

	const { baseStyles, iconStyles } = useButtonStyles();

	const darkHandler = () => setIsDark(prev => !prev);

	return (
		<button className={`${baseStyles} ${className} fixed right-1 scale-75 group`} onClick={darkHandler}>
			<Icon className={`${iconStyles} group-hover:text-primary-800`} Component={!isDark ? SunMedium : Moon} />
		</button>
	);
};

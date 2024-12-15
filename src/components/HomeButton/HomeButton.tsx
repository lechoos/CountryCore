import { useButtonStyles } from '../../hooks/useButtonStyles';
import { NavLink } from 'react-router';
import { Home } from 'lucide-react';

export const HomeButton = () => {
	const { baseStyles, iconStyles } = useButtonStyles();

	return (
		<NavLink
			className={`${baseStyles} inline-block mt-2 ml-2 group`}
			to='/'>
			<Home className={`${iconStyles} group-hover:text-primary-800 dark:group-hover:text-primary-200`} />
		</NavLink>
	);
};

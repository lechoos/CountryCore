import { useButtonStyles } from '../../hooks/useButtonStyles';
import { NavLink } from 'react-router';
import { NavItem as NavItemProps } from '../../types/navItems';

export const NavItem = ({ path, Icon, offset, active }: NavItemProps) => {
	const { baseStyles, iconStyles } = useButtonStyles();

	return (
		<NavLink
			className={`${baseStyles} relative ${offset && `-translate-x-${offset}`} ${active && '!translate-x-0'} group`}
			to={path}>
			<Icon className={`${iconStyles} group-hover:text-primary-800`} />
		</NavLink>
	);
};

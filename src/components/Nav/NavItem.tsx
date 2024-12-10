import { NavLink } from 'react-router';
import { NavItem as NavItemProps } from '../../types/navItems';

export const NavItem = ({ path, Icon }: NavItemProps) => (
	<NavLink
		className='p-[1.4rem] rounded-full bg-secondary-700 dark:bg-secondary-300 hover:rounded-xl hover:bg-secondary-400 dark:hover:bg-secondary-700 transition-all duration-300 group'
		to={path}>
		<Icon className='w-3 transition-colors aspect-square text-primary-200 dark:text-primary-900 group-hover:text-primary-800 dark:group-hover:text-primary-200' />
	</NavLink>
);

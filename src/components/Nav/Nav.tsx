import { useState } from 'react';
import { useButtonStyles } from '../../hooks/useButtonStyles';
import { NavItems } from '../../types/navItems';
import { Home, Globe, Search, CircleChevronRight } from 'lucide-react';
import { NavItem } from './NavItem';
import { ThemeButton } from '../ThemeButton/ThemeButton';

export const Nav = () => {
	const [active, setActive] = useState(false);

	const { baseStyles, iconStyles } = useButtonStyles();

	const navActiveHandler = () => {
		setActive(prev => !prev);
	};

	const items: NavItems = [
		{
			path: '/',
			Icon: Home,
		},
		{
			path: '/world',
			Icon: Globe,
			offset: '3/4',
		},
		{
			path: '/search',
			Icon: Search,
			offset: 150,
		},
	];

	return (
		<nav className='relative'>
			<ThemeButton />
			<button onClick={navActiveHandler} className={`${baseStyles} fixed top-1 left-1 group z-10`}>
				<CircleChevronRight
					className={`${iconStyles} ${active && 'rotate-180'}
					transition-all group-hover:text-primary-800 dark:group-hover:text-primary-200`}
				/>
			</button>
			<div
				className={`fixed top-7 flex flex-col items-start gap-2 px-1 py-1 w-fit rounded-r-xl overflow-hidden transition-transform duration-300 -translate-x-full z-[5] ${
					active && 'translate-x-0'
				}`}>
				{items.map(item => (
					<NavItem key={item.path} path={item.path} Icon={item.Icon} active={active} offset={item?.offset} />
				))}
			</div>
		</nav>
	);
};

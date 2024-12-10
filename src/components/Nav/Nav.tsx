import { Home, Globe, Search } from 'lucide-react';
import { NavItem } from './NavItem';
import { NavItems } from '../../types/navItems';

export const Nav = () => {
	const items: NavItems = [
		{
			path: '/',
			Icon: Home,
		},
		{
			path: '/world',
			Icon: Globe,
		},
		{
			path: '/search',
			Icon: Search,
		},
	];

	return (
		<nav className='flex justify-center'>
			<div className='relative flex justify-center gap-2 px-4 py-2 overflow-hidden border border-t-0 w-fit rounded-b-2xl'>
				{items.map(item => (
					<NavItem key={item.path} path={item.path} Icon={item.Icon} />
				))}
			</div>
		</nav>
	);
};

// import { NavItem } from './NavItem';

// export const Nav = () => {
// 	return (
// 		<nav className='flex justify-center'>
// 			<div className='relative flex justify-center px-2 py-1 overflow-hidden border w-fit rounded-b-2xl'>
// 			</div>
// 		</nav>
// 	);
// };

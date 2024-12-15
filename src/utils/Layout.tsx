import { Outlet } from 'react-router';
import { ThemeButton } from '../components/ThemeButton/ThemeButton';
import { HomeButton } from '../components/HomeButton/HomeButton';

const Layout = () => {
	return (
		<>
			<ThemeButton />
			<HomeButton />
			<main className='wrapper'>
				<Outlet />
			</main>
		</>
	);
};

export default Layout;

import { Nav } from '../components/Nav/Nav';
import { Outlet } from 'react-router';

const Layout = () => {
	return (
		<>
			<Nav />
			<section className='wrapper'>
				<Outlet />
			</section>
		</>
	);
};

export default Layout;

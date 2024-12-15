import { BrowserRouter, Route, Routes } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from '../pages/Home';
import { ThemeProvider } from '../contexts/theme/ThemeProvider';
import Layout from '../utils/Layout';
import Country from '../pages/Country';

const queryClient = new QueryClient();

const Router = () => (
	<QueryClientProvider client={queryClient}>
		<BrowserRouter>
			<ThemeProvider>
				<Routes>
					<Route element={<Layout />}>
						<Route index element={<Home />} />
						<Route path='/country/:name' element={<Country />} />
					</Route>
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	</QueryClientProvider>
);

export default Router;

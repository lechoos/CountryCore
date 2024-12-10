import { BrowserRouter, Route, Routes } from 'react-router';
import App from '../App';
import { ThemeProvider } from '../contexts/theme/ThemeProvider';

const Router = () => (
	<BrowserRouter>
		<ThemeProvider>
			<Routes>
				<Route path='/' element={<App />} />
			</Routes>
		</ThemeProvider>
	</BrowserRouter>
);

export default Router;

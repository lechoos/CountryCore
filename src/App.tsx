import { ThemeProvider } from './contexts/theme/ThemeProvider';
import { Test } from './components/Test';

export default function App() {
	return (
		<ThemeProvider>
			<div className='min-h-screen bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white transition-colors duration-300'>
				<h1>Countries</h1>
				<Test />
			</div>
		</ThemeProvider>
	);
}

import { use } from 'react';
import { ThemeContext } from '../contexts/theme/ThemeContext';
import Sun from '../assets/sun.svg';
import Moon from '../assets/moon.svg';

export const Test = () => {
	const { isDark, setIsDark } = use(ThemeContext)!;

	const imagePath = isDark ? Sun : Moon;

	return (
		<button
			className='px-2 py-1 transition duration-300 rounded-lg bg-accent-500 hover:bg-accent-800'
			onClick={() => setIsDark(prev => !prev)}>
			<img src={imagePath} alt='Icon' />
		</button>
	);
};

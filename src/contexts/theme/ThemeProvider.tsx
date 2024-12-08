import { ReactNode, useEffect, useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { ThemeContext } from './ThemeContext';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const { getItem, setItem } = useLocalStorage();

	const [isDark, setIsDark] = useState(() => {
		const setting = getItem<boolean>('darkMode');

		if (setting !== null) {
			return setting;
		}

		return window.matchMedia('(prefers-color-scheme: dark)').matches;
	});

	useEffect(() => {
		setItem('darkMode', isDark);
		document.documentElement.classList.toggle('dark', isDark);
	}, [isDark, setItem]);

	return <ThemeContext.Provider value={{ isDark, setIsDark }}>{children}</ThemeContext.Provider>;
};

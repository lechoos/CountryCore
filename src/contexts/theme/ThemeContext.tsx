import { createContext } from 'react';
import { ThemeType } from './themeType';

export const ThemeContext = createContext<ThemeType | null>(null);
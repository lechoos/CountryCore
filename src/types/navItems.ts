import { LucideIcon } from 'lucide-react';

export type NavItem = {
	path: string;
	Icon: LucideIcon;
	offset?: 150 | string;
	active?: boolean;
};

export type NavItems = NavItem[];

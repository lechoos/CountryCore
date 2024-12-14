// import { useHover } from '../../hooks/useHover';

// export const CountryCard = ({ url }: { url: string }) => {
// 	return (
// 		<div
// 			className={`relative overflow-hidden transition-all duration-500`}>
// 			<div
// 				className={`absolute flex flex-col justify-between inset-0 bg-primary-300 p-2 ${styles.content} ${
// 					hover && styles.hovered
// 				}`}>
// 				<h2 className='font-bold'>Poland</h2>
// 				<p className='text-sm'>Capital: Warsaw</p>
// 				<p className='text-sm'>
// 					Area: 312679.0 km<sup>2</sup>
// 				</p>
// 				<p className='text-sm'>Population: 37950802</p>
// 			</div>
// 		</div>
// 	);
// };

import { Link } from 'react-router';
import styles from './countryCard.module.scss';

type CardProps = {
	name: string;
	capital: string;
	area: number;
	population: number;
};

type TextProps = {
	keyName: string;
	value: string | number;
};

const TextComponent = ({ keyName, value }: TextProps) => {
	return (
		<p className={`${styles.text}`}>
			{keyName}: {value}
		</p>
	);
};

export const CountryCard = ({ name, capital, area, population }: CardProps) => {
	return (
		<div className='flex flex-col justify-between p-[2.4rem] bg-secondary-900 dark:bg-accent-900 transition-colors duration-500'>
			<h2 className='mb-2 text-secondary-400 dark:text-accent-400 font-bold'>{name}</h2>
			<div className='flex flex-col gap-1'>
				<TextComponent keyName='Capital' value={capital} />
				<TextComponent keyName='Area' value={`${area.toFixed(0)} km²`} />
				<TextComponent keyName='Population' value={population} />
				<Link className={`${styles.text} underline`} to={`/country/${name.toLowerCase()}`}>
					See more
				</Link>
			</div>
		</div>
	);
};

import styles from './country.module.scss';
import { CountryValues } from '../../types/country';
import { CountryMap } from '../../components/CountryMap/CountryMap';

type ContentProps = {
	country: CountryValues;
};

export const Content = ({ country }: ContentProps) => {
	const nativeName = Object.values(country.name.nativeName)[0] as { official: string; common: string };

	return (
		<div className={`${styles.container}`}>
			<h1 className='text-secondary-800 dark:text-accent-300'>{country.name.common}</h1>
			<h2 className='font-semibold text-secondary-800 dark:text-accent-300'>{country.name.official}</h2>
			<div className='flex flex-wrap justify-center w-full gap-4'>
				<div className={`${styles.flags}`}>
					<img
						className={`${styles.image} ring-2 ring-secondary-500 dark:ring-0`}
						src={country.flags.svg}
						alt={country.flags.alt || country.name.common + "'s flag"}
					/>
					<img className={styles.image} src={country.coatOfArms.svg} alt={country.name.official + "'s coat of arms"} />
				</div>
				<CountryMap area={country.area} cca3={country.cca3} latlng={country.latlng} />
			</div>
			<div className='grid gap-[2.5em] self-start mt-6'>
				<div className='flex flex-col gap-[2.5em]'>
					<h2 className={styles['info-title']}>Native names:</h2>
					<div className='flex flex-col lg:flex-row gap-3 lg:gap-6'>
						<h3 className={styles['info-item']}>Common: {nativeName.common}</h3>
						<h3 className={styles['info-item']}>Official: {nativeName.official}</h3>
					</div>
				</div>
				<div className='flex flex-col gap-[2.5em]'>
					<h2 className={styles['info-title']}>Information:</h2>
					<h3 className={styles['info-item']}>Capital: {country.capital}</h3>
					<h3 className={`${styles['info-item']} mb-3`}>
						Currency: {Object.values(country.currencies)[0].name} | {Object.values(country.currencies)[0].symbol}
					</h3>
					<h3 className={styles['info-item']}>Continents: {country.continents.join(', ')}</h3>
					<h3 className={styles['info-item']}>Timezones: {country.timezones.join(', ')}</h3>
					<h3 className={styles['info-item']}>Area: {country.area} km²</h3>
					<h3 className={styles['info-item']}>Population: {country.population}</h3>
					<h3 className={styles['info-item']}>Languages: {Object.values(country.languages).join(', ')}</h3>
				</div>
			</div>
		</div>
	);
};

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { CountryCard } from '../../components/CountryCard/CountryCard';
import { CountryValues } from '../../types/country';

type Country = Pick<CountryValues, 'area' | 'capital' | 'name' | 'population'>;

const fetchCountries = () =>
	fetch('https://restcountries.com/v3.1/independent?status=true&fields=area,capital,name,population')
		.then(res => res.json())
		.then(res => res.sort((a: Country, b: Country) => a.name.common.localeCompare(b.name.common)));

const loadingStyles = 'mt-2 text-center text-3xl text-primary-100 font-bold';

export default function Home() {
	const LIMIT_PER_PAGE = 30;
	const { ref, inView } = useInView();
	const [visibleCount, setVisibleCount] = useState(LIMIT_PER_PAGE);

	const { data: allCountries, isLoading } = useQuery({
		queryKey: ['countries'],
		queryFn: fetchCountries,
	});

	const visibleCountries = allCountries?.slice(0, visibleCount) || [];

	useEffect(() => {
		if (inView && allCountries && visibleCount < allCountries.length) {
			setVisibleCount(prev => Math.min(prev + LIMIT_PER_PAGE, allCountries.length));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inView, visibleCount, allCountries?.length]);

	if (isLoading) {
		return <div className={loadingStyles}>Loading...</div>;
	}

	return (
		<>
			<div className='grid grid-rows-[auto] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10 px-2'>
				{(!allCountries || allCountries.length === 0) && <div className={loadingStyles}>No countries fetched</div>}

				{visibleCountries.map((country: Country | null) => {
					if (country)
						return (
							<CountryCard
								key={country.name.official}
								name={country.name.common}
								capital={country.capital[0]}
								area={country.area}
								population={country.population}
							/>
						);
				})}
			</div>

			{allCountries && visibleCount < allCountries.length && (
				<div ref={ref} className={loadingStyles}>
					Loading...
				</div>
			)}
		</>
	);
}

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import { CountryCard } from '../../components/CountryCard/CountryCard';
import { CountryValues } from '../../types/country';

type Country = Pick<CountryValues, 'area' | 'capital' | 'name' | 'population'>;

const fetchCountries = () =>
	fetch('https://restcountries.com/v3.1/independent?status=true&fields=area,capital,name,population')
		.then(res => res.json())
		.then(res => res.sort((a: Country, b: Country) => a.name.common.localeCompare(b.name.common)));

const loadingStyles = 'mt-2 text-center text-3xl text-primary-100 font-bold';

export default function Home() {
	const { data: allCountries, isLoading } = useQuery({
		queryKey: ['countries'],
		queryFn: fetchCountries,
	});

	const LIMIT_PER_PAGE = 30;
	const { ref, inView } = useInView();

	const [visibleCount, setVisibleCount] = useState(LIMIT_PER_PAGE);
	const [visibleCountries, setVisibleCountries] = useState(allCountries?.slice(0, visibleCount) || []);
	const [search, setSearch] = useState('');
	useEffect(() => {
		if (inView && allCountries && visibleCount < allCountries.length) {
			setVisibleCount(prev => Math.min(prev + LIMIT_PER_PAGE, allCountries.length));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inView, visibleCount, allCountries?.length]);

	useEffect(() => {
		if (search) {
			return setVisibleCountries(
				allCountries.filter((country: Country) => country.name.common.toLowerCase().includes(search.toLowerCase()))
			);
		}

		setVisibleCountries(allCountries?.slice(0, visibleCount) || []);
	}, [search, allCountries, visibleCount]);

	if (isLoading) {
		return <div className={loadingStyles}>Loading...</div>;
	}

	return (
		<section className='flex flex-col items-center'>
			<Searchbar value={search} setValue={setSearch} />
			<div className='flex gap-4 flex-wrap justify-center my-10 px-2'>
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
		</section>
	);
}

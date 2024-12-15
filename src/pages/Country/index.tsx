import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { CountryValues } from '../../types/country';

import { LoadingFallback } from '../../components/LoadingFallback/LoadingFallback';
import { Content } from './Content';

const Country = () => {
	const { name } = useParams();

	const { data, isLoading } = useQuery({
		queryKey: ['country'],
		queryFn: () =>
			fetch(
				`https://restcountries.com/v3.1/name/${name}?fullText=true&&fields=name,cca2,capital,flags,coatOfArms,continents,timezones,area,population,languages,maps,currencies`
			).then(res => res.json()),
	});

	if (isLoading) return <LoadingFallback />;

	if (data) {
		return (
			<>
				{data.map((country: CountryValues) => (
					<Content key={country.cca2} country={country} />
				))}
			</>
		);
	}
};

export default Country;

//* name.common     name.nativeName.common (cca2.toLowerCase())
//* name.official   name.nativeName.official (cca2.toLowerCase())
//* capital
//* flags (png or svg) && flags?.alt
//* coatOfArms (same as above)

//* continents
//* timezones
//* area
//* population
//* languages

//? maps maybe??

//* currencies[0]

export type CountryValues = {
	area: number;
	capital: string[];
	cca3: string;
	coatOfArms: {
		[key: string]: string;
	};
	continents: string[];
	currencies: {
		[currency: string]: {
			name: string;
			symbol: string;
		};
	};
	flags: {
		alt?: string;
		png: string;
		svg: string;
	};
	languages: {
		[language: string]: string;
	};
	latlng: number[];
	name: {
		common: string;
		official: string;
		nativeName: {
			[name: string]: {
				common: string;
				official: string;
			};
		};
	};
	population: number;
	timezones: string[];
};

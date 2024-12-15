import Map, { Source, Layer } from 'react-map-gl/maplibre';
import maplibregl from 'maplibre-gl';
import { CountryValues } from '../../types/country';

type MapProps = Pick<CountryValues, 'area' | 'cca3' | 'latlng'>;

export const CountryMap = ({ area, cca3, latlng }: MapProps) => {
	const mapKey = import.meta.env.VITE_MAP_KEY;

	const getZoomLevel = (area: number) => {
		switch (true) {
			case area > 10000000:
				return 1;
			case area > 5000000:
				return 2;
			case area > 2000000:
				return 2.5;
			case area > 1000000:
				return 3;
			case area > 500000:
				return 3.5;
			case area > 100000:
				return 4;
			case area > 20000:
				return 4.5;
			case area > 5000:
				return 5;
			default:
				return 6;
		}
	};

	return (
		<Map
			mapLib={maplibregl}
			reuseMaps
			initialViewState={{
				longitude: latlng[1],
				latitude: latlng[0],
				zoom: getZoomLevel(area),
			}}
			style={{ maxWidth: 600, aspectRatio: '3/2' }}
			mapStyle={`https://api.maptiler.com/maps/basic-v2-dark/style.json?key=${mapKey}`}>
			<Source
				id='countries'
				type='geojson'
				data='https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_countries.geojson'>
				<Layer
					id='country-fill'
					type='fill'
					paint={{
						'fill-color': '#4ade80',
						'fill-opacity': 0.2,
					}}
					filter={['==', ['get', 'iso_a3'], cca3]}
				/>
				<Layer
					id='country-border'
					type='line'
					paint={{
						'line-color': '#22c55e',
						'line-width': 2,
					}}
					filter={['==', ['get', 'iso_a3'], cca3]}
				/>
			</Source>
		</Map>
	);
};

import { buildStarWars, buildPokemons, buildCountries } from 'utils/buildData';

describe('Unit testing for building data', () => {
	it('Should build the proper star wars structure data', () => {
		const data = {
			allPeople: {
				edges: [
					{
						node: {
							id: 1,
							name: 'Something',
							gender: 'male',
							birthYear: '18B8',
							eyeColor: 'brown',
							hairColor: 'brown',
							mass: '78',
							height: '178',
						},
					},
				],
			},
		};

		const {
			id,
			name,
			gender,
			birthYear,
			eyeColor,
			hairColor,
			mass,
			height,
		} = data.allPeople.edges[0].node;

		const description = `${name}, ${gender} gender,
    was born on the year ${birthYear}, ${eyeColor} eyes and ${hairColor} hair,
    has a mass of ${mass}kg and ${height}' height`;

		expect(buildStarWars(data)[0]).toEqual({
			id,
			title: name,
			description,
			img: '/img/unknown.png',
		});
	});

	it('Should build the proper data structure for pokemon data', () => {
		const data = {
			pokemons: [
				{
					id: 1,
					name: 'bulbasaur',
					image: 'example.png',
					number: '001',
					weight: {
						minimum: 55,
						maximum: 70,
					},
					height: {
						minimum: 160,
						maximum: 170,
					},
					classification: 'seed pokemon',
				},
			],
		};

		const {
			id,
			name,
			number,
			weight,
			height,
			classification,
			image,
		} = data.pokemons[0];

		const description = `${name} is number ${number} on the pokedex,
    has an average weight of ${weight.minimum} ~ ${weight.maximum} and a average
    height of ${height.minimum} ~ ${height.maximum} and is a ${classification}`;

		expect(buildPokemons(data)[0]).toEqual({
			id,
			title: name,
			description,
			img: image,
		});
	});

	it('Should build the proper data structure for country data', () => {
		const data = {
			countries: [
				{
					code: 'A5F',
					name: 'something',
					phone: 565,
					languages: ['English'],
					states: ['Something'],
					currency: 'R$',
					continent: {
						name: 'Something',
					},
				},
			],
		};

		const {
			name,
			code,
			phone,
			languages,
			states,
			currency,
			continent,
		} = data.countries[0];

		const description = `${name} has a prefix phone ${phone}, has a total of
    ${languages.length} spoken languages and a total of ${states.length} states,
    it's official currency is ${currency} and it belongs to the ${continent.name} continent`;

		expect(buildCountries(data)[0]).toEqual({
			id: code,
			title: name,
			description,
			img: '/img/map.png',
		});
	});
});

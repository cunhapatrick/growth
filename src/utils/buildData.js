export const buildStarWars = (data) =>
	data.allPeople.edges.map((people) => {
		const {
			id,
			name,
			gender,
			birthYear,
			eyeColor,
			hairColor,
			mass,
			height,
		} = people.node;

		const description = `${name}, ${gender} gender,
    was born on the year ${birthYear}, ${eyeColor} eyes and ${hairColor} hair,
    has a mass of ${mass}kg and ${height}' height`;
		return { id, title: name, description, img: '/img/unknown.png' };
	});

export const buildPokemons = (data) =>
	data.pokemons.map((pk) => {
		const { id, name, image, number, weight, height, classification } = pk;

		const description = `${name} is number ${number} on the pokedex,
    has an average weight of ${weight.minimum} ~ ${weight.maximum} and a average
    height of ${height.minimum} ~ ${height.maximum} and is a ${classification}`;

		return { id, title: name, img: image, description };
	});

export const buildCountries = (data) =>
	data.countries.map((country) => {
		const {
			code,
			name,
			phone,
			languages,
			states,
			currency,
			continent,
		} = country;

		const description = `${name} has a prefix phone ${phone}, has a total of
    ${languages.length} spoken languages and a total of ${states.length} states,
    it's official currency is ${currency} and it belongs to the ${continent.name} continent`;

		return { id: code, title: name, description, img: '/img/map.png' };
	});

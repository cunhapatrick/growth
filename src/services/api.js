import ApolloClient, { gql } from 'apollo-boost';

export const clientStarWars = new ApolloClient({
	uri: 'https://swapi-graphql.netlify.com/.netlify/functions/index',
});
export const clientPokemon = new ApolloClient({
	uri: 'https://graphql-pokemon.now.sh/graphql',
});
export const clientCountry = new ApolloClient({
	uri: 'https://countries.trevorblades.com/',
});

export const LIST_STAR_WARS = gql`
	{
		allPeople {
			edges {
				node {
					id
					name
					gender
					birthYear
					eyeColor
					hairColor
					mass
					height
				}
			}
		}
	}
`;
export const LIST_POKEMONS = gql`
	{
		pokemons(first: 20) {
			id
			number
			name
			image
			weight {
				minimum
				maximum
			}
			height {
				minimum
				maximum
			}
			classification
		}
	}
`;
export const LIST_COUNTRIES = gql`
	{
		countries {
			code
			name
			phone
			languages {
				name
			}
			states {
				name
			}
			currency
			continent {
				name
			}
		}
	}
`;

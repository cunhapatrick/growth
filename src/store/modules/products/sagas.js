import { call, put, all, takeLatest } from 'redux-saga/effects';
import {
	clientStarWars,
	clientPokemon,
	clientCountry,
	LIST_STAR_WARS,
	LIST_POKEMONS,
	LIST_COUNTRIES,
} from 'services/api';

import { buildStarWars, buildPokemons, buildCountries } from 'utils/buildData';

import { PRODUCTS_REQUEST, PRODUCTS_SUCCESS } from './types';

function* fetchProducts() {
	const { data: datasw } = yield call(clientStarWars.query, {
		query: LIST_STAR_WARS,
	});
	const { data: datapk } = yield call(clientPokemon.query, {
		query: LIST_POKEMONS,
	});
	const { data: datac } = yield call(clientCountry.query, {
		query: LIST_COUNTRIES,
	});

	const starWars = buildStarWars(datasw);
	const pokemons = buildPokemons(datapk);
	const countries = buildCountries(datac);

	const page = {
		total: starWars.length + pokemons.length + countries.length,
		number: 1,
	};

	const payload = { starWars, pokemons, countries, page };

	yield put({ type: PRODUCTS_SUCCESS, payload });
}

export default all([takeLatest(PRODUCTS_REQUEST, fetchProducts)]);

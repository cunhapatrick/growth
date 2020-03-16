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

import { PRODUCTS_REQUEST, PRODUCTS_SUCCESS, PRODUCTS_FAIL } from './types';

function* fetchProducts() {
	try {
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

		// throw new Error('teste');

		const payload = { starWars, pokemons, countries, page };
		yield put({ type: PRODUCTS_SUCCESS, payload });
	} catch (err) {
		yield put({ type: PRODUCTS_FAIL, payload: err });
	}
}

export default all([takeLatest(PRODUCTS_REQUEST, fetchProducts)]);

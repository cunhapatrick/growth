import produce from 'immer';
import initialState from './store';

import {
	PRODUCTS_SUCCESS,
	GET_PRODUCT,
	PRODUCTS_FAIL,
	PRODUCTS_PAGE,
} from './types';

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case PRODUCTS_PAGE:
			return produce(state, (draft) => {
				let currentProducts;

				const { source, search, number, order } = action;
				const { products } = draft;

				if (source.length === 0) {
					currentProducts = [
						...products.starWars,
						...products.pokemons,
						...products.countries,
					];
				} else
					currentProducts = source.map((pool) => draft.products[pool]).flat();
				if (search !== '')
					currentProducts = currentProducts.filter(
						(p) => p.title.toUpperCase().indexOf(search.toUpperCase()) !== -1
					);

				currentProducts.sort((a, b) => {
					let comp = 0;
					if (a.title.toUpperCase() > b.title.toUpperCase()) comp = order;
					else if (a.title.toUpperCase() < b.title.toUpperCase())
						comp = -Math.abs(1);
					return comp;
				});

				const total = currentProducts.length;

				currentProducts = currentProducts.slice((number - 1) * 8, number * 8);

				draft.page = { number, total };
				draft.currentProducts = currentProducts;
			});

		case GET_PRODUCT:
			return produce(state, (draft) => {
				const productIndex = draft.products.findIndex(
					(p) => p.id === action.id
				);
				draft.product = { ...draft.products[productIndex - 1] };
			});

		case PRODUCTS_SUCCESS:
			return produce(state, (draft) => {
				draft.products = action.payload;

				let currentProducts = [
					...action.payload.starWars,
					...action.payload.pokemons,
					...action.payload.countries,
				];

				currentProducts.sort((a, b) => {
					let comp = 0;
					if (a.title.toUpperCase() > b.title.toUpperCase()) comp = 1;
					else if (a.title.toUpperCase() < b.title.toUpperCase()) comp = -1;
					return comp;
				});

				const total = currentProducts.length;

				currentProducts = currentProducts.slice(0, 8);

				draft.page = { number: 1, total };
				draft.currentProducts = currentProducts;
				draft.loaded = true;
			});

		case PRODUCTS_FAIL:
			return produce(state, (draft) => {
				draft.error = action.payload.message;
				draft.loaded = true;
			});
		default:
			return state;
	}
};

export default reducer;

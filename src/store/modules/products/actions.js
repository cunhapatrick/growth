import { PRODUCTS_PAGE, GET_PRODUCT, PRODUCTS_REQUEST } from './types';

export const productsRequest = () => ({ type: PRODUCTS_REQUEST });

export const productsPage = ({
	number = 1,
	order = 1,
	source = [],
	search = '',
}) => ({
	type: PRODUCTS_PAGE,
	number,
	source,
	search,
	order,
});

export const getProduct = (id) => ({ type: GET_PRODUCT, id });

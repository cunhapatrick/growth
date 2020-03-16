import { bindActionCreators } from 'redux';
import * as productsActions from './modules/products/actions';
import * as favoritesActions from './modules/favorites/actions';

const actions = {
	...productsActions,
	...favoritesActions,
};

export const buildMapStateToProps = (state, fields = null) => {
	if (fields === null) {
		return {
			storeProducts: state.products,
			favorites: state.favorites,
		};
	}

	return fields.reduce(
		(result, current) => ({
			...result,
			[current]: state[current],
		}),
		{}
	);
};

export const buildmapDispatchToProps = (dispatch) =>
	bindActionCreators(actions, dispatch);

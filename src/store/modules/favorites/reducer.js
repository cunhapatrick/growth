import produce from 'immer';
import initialState from './store';

import { ADD_FAVORITE, REMOVE_FAVORITE } from './types';

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_FAVORITE:
			return produce(state, (draft) => {
				draft.push(action.product);
			});
		case REMOVE_FAVORITE:
			return produce(state, (draft) => {
				return draft.filter((f) => f.id !== action.id);
			});

		default:
			return state;
	}
};

export default reducer;

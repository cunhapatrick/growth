import { combineReducers } from 'redux';

import products from './products/reducer';
import favorites from './favorites/reducer';

export default combineReducers({
	products,
	favorites,
});

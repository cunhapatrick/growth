import React, { useState } from 'react';
import withConnect from 'store/withConnect';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

// CSS
// import * as style from './Home.style';

// Components
import LayoutWrapper from 'hocs/LayoutWrapper';
import Favorites from './Favorites';

export const FavoritesContainer = ({ favorites }) => {
	const [page, setPage] = useState({ number: 1, total: favorites.length });

	const handlePagination = (number) => setPage({ ...page, number });

	const { goBack } = useHistory();

	return (
		<LayoutWrapper>
			<Favorites
				favorites={favorites}
				page={page}
				goBack={goBack}
				handlePagination={handlePagination}
			/>
		</LayoutWrapper>
	);
};

FavoritesContainer.propTypes = {
	/* store */
	favorites: PropTypes.array.isRequired,
};

export default withConnect(FavoritesContainer, ['favorites']);

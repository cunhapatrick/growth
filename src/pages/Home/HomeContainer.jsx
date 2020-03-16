import React, { useState, useLayoutEffect, useEffect } from 'react';
import withConnect from 'store/withConnect';
import PropTypes from 'prop-types';

// HOC
import LayoutWrapper from 'hocs/LayoutWrapper';

// Functions
import { isLogged } from 'services/auth';

// Components
import Home from './Home';

export const HomeContainer = ({
	storeProducts,
	productsRequest,
	productsPage,
	favorites,
	addFavorite,
	removeFavorite,
}) => {
	const [order, setOrder] = useState(1);
	const [source, setSource] = useState([]);
	const [searchInput, setSearchInput] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const { currentProducts, page, loaded } = storeProducts;

	useLayoutEffect(() => {
		productsRequest();
	}, [productsRequest]);

	useEffect(() => {
		if (loaded) {
			setCurrentPage(1);
			productsPage({ order, search: searchInput, number: 1, source });
		}
	}, [loaded, productsPage, searchInput, order, source]);

	const handlePagination = (number) => {
		setCurrentPage(number);
		productsPage({ number, order, search: searchInput, source });
	};

	const handleOrder = (o) => setOrder(o);

	const handleSearchInput = ({ target }) => setSearchInput(target.value);

	const handleSearch = (search) =>
		productsPage({ search, order, source, number: 1 });

	const handleSource = (opt) => {
		if (source.some((tag) => tag === opt))
			setSource(source.filter((tag) => tag !== opt));
		else setSource([...source, opt]);
	};

	const tagsList = {
		starWars: 'Star Wars',
		pokemons: 'Pokemon',
		countries: 'Countries',
	};

	return (
		<LayoutWrapper
			id="layout-wrapper"
			searchInput={searchInput}
			source={source}
			handleSearchInput={handleSearchInput}
			handleSearch={handleSearch}
			handleSource={handleSource}
			tagsList={tagsList}
		>
			<Home
				id="home-container"
				order={order}
				loaded={loaded}
				handleOrder={handleOrder}
				isLogged={isLogged()}
				currentProducts={currentProducts}
				favorites={favorites}
				addFavorite={addFavorite}
				removeFavorite={removeFavorite}
				currentPage={currentPage}
				page={page}
				handlePagination={handlePagination}
			/>
		</LayoutWrapper>
	);
};

HomeContainer.propTypes = {
	/* store */
	storeProducts: PropTypes.object.isRequired,
	favorites: PropTypes.array.isRequired,
	/* store funcs */
	productsRequest: PropTypes.func.isRequired,
	productsPage: PropTypes.func.isRequired,
	addFavorite: PropTypes.func.isRequired,
	removeFavorite: PropTypes.func.isRequired,
	/* props state */
	/* prop funcs */
	// productsRequest: PropTypes.func.isRequired,
};

export default withConnect(HomeContainer);

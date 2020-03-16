import React from 'react';
import PropTypes from 'prop-types';

// CSS
import * as Style from './Header.style';

// Components
import Header from './Header';

const HeaderContainer = ({
	isLogged,
	user,
	searchInput,
	source,
	handleModalLogin,
	handleModalSignup,
	handleSearch,
	handleSearchInput,
	handleSource,
	logout,
	tagsList,
}) => (
	<Style.Header id="header">
		<Header
			isLogged={isLogged}
			user={user}
			handleModalLogin={handleModalLogin}
			handleModalSignup={handleModalSignup}
			logout={logout}
			searchInput={searchInput}
			handleSearch={handleSearch}
			handleSearchInput={handleSearchInput}
			handleSource={handleSource}
			tags={source}
			tagsList={tagsList}
		/>
	</Style.Header>
);

HeaderContainer.propTypes = {
	isLogged: PropTypes.bool.isRequired,
	source: PropTypes.array.isRequired,
	searchInput: PropTypes.string.isRequired,
	handleModalLogin: PropTypes.func.isRequired,
	handleSearchInput: PropTypes.func.isRequired,
	handleModalSignup: PropTypes.func.isRequired,
	handleSearch: PropTypes.func.isRequired,
	handleSource: PropTypes.func.isRequired,
	logout: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired,
	tagsList: PropTypes.object.isRequired,
};

export default HeaderContainer;

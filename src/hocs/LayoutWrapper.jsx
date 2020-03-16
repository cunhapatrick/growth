import React, { useState, useLayoutEffect, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

// Antd Components
import { Layout } from 'antd';

// Components
import Header from 'components/Header';
import Footer from 'components/Footer';
import ModalSignup from 'components/ModalSignup';
import ModalLogin from 'components/ModalLogin';

// Functions
import { isLogged, login, signup, logout } from 'services/auth';
import { getLocalStorage } from 'utils/localStorage';

// CSS
import * as Style from './LayoutWrapper.style';

const LayoutWrapper = ({
	children,
	handleSearch,
	handleSource,
	tagsList,
	source,
	searchInput,
	handleSearchInput,
}) => {
	const [modalLogin, setModalLogin] = useState(false);
	const [modalSignup, setModalSignup] = useState(false);
	const [siderState, setSider] = useState(false);
	const [user, setUser] = useState({ name: '', password: '' });

	const logged = isLogged();

	useLayoutEffect(() => {
		if (logged) setUser(getLocalStorage('user'));
	}, [logged]);

	const handleModalLogin = () => setModalLogin(!modalLogin);
	const handleModalSignup = () => setModalSignup(!modalSignup);
	const handleSider = () => setSider(!siderState);

	const { push } = useHistory();

	return (
		<Layout>
			<ModalLogin
				modalLogin={modalLogin}
				login={login}
				handleModalLogin={handleModalLogin}
			/>
			<ModalSignup
				modalSignup={modalSignup}
				signup={signup}
				handleModalSignup={handleModalSignup}
			/>
			<Header
				isLogged={logged}
				user={user}
				searchInput={searchInput}
				handleSearchInput={handleSearchInput}
				handleSource={handleSource}
				tagsList={tagsList}
				source={source}
				handleSider={handleSider}
				handleModalLogin={handleModalLogin}
				handleModalSignup={handleModalSignup}
				logout={() => logout(push)}
			/>
			<Style.Content>{cloneElement(children)}</Style.Content>
			<Footer />
		</Layout>
	);
};

LayoutWrapper.propTypes = {
	children: PropTypes.any.isRequired,
	searchInput: PropTypes.string,
	handleSearch: PropTypes.func,
	handleSearchInput: PropTypes.func,
	source: PropTypes.array,
	handleSource: PropTypes.func,
	tagsList: PropTypes.object,
};

LayoutWrapper.defaultProps = {
	source: [],
	handleSource: () => {},
	tagsList: {},
	searchInput: '',
	handleSearch: () => {},
	handleSearchInput: () => {},
};

export default LayoutWrapper;

import React, { useState, useLayoutEffect } from 'react';
import withConnect from 'store/withConnect';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

// CSS
// import * as style from './Home.style';

// Components
import LayoutWrapper from 'hocs/LayoutWrapper';
import Product from './Product';

export const ProductContainer = ({ products: storeProducts }) => {
	const [product, setProduct] = useState({});
	const { id } = useParams();
	const { goBack, push } = useHistory();

	useLayoutEffect(() => {
		if (storeProducts.currentProducts.length === 0) push('/');
		setProduct(storeProducts.currentProducts.find((p) => p.id === id));
	}, [id, storeProducts.currentProducts, push]);

	return (
		<LayoutWrapper>
			<Product product={product} goBack={goBack} />
		</LayoutWrapper>
	);
};

ProductContainer.propTypes = {
	/* store */
	products: PropTypes.object.isRequired,
};

export default withConnect(ProductContainer, ['products']);

import React from 'react';
import PropTypes from 'prop-types';

// Antd Components
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

// CSS
import * as Style from './ProductCard.style';

const ProductCard = ({
	product,
	isLogged,
	isFavorite,
	showFavorite,
	addFavorite,
	removeFavorite,
}) => (
	<Style.Container className="product-card">
		<Style.CardProduct
			hoverable
			cover={<img src={product.img} alt="product" />}
		>
			<Style.CardProductMeta title={product.title} />
		</Style.CardProduct>
		<Style.ActionButton to={`/product/${product.id}`} />
		{isLogged && showFavorite && (
			<Style.FloatButton
				type="link"
				onClick={() =>
					!isFavorite ? addFavorite(product) : removeFavorite(product.id)
				}
				icon={isFavorite ? <HeartFilled /> : <HeartOutlined />}
			/>
		)}
	</Style.Container>
);

ProductCard.propTypes = {
	/* prop states */
	product: PropTypes.object.isRequired,
	// favorite: PropTypes.bool.isRequired,
	isLogged: PropTypes.bool,
	isFavorite: PropTypes.bool,
	showFavorite: PropTypes.bool,
	/* props funcs */
	addFavorite: PropTypes.func,
	removeFavorite: PropTypes.func,
};

ProductCard.defaultProps = {
	showFavorite: false,
	addFavorite: () => {},
	removeFavorite: () => {},
	isLogged: false,
	isFavorite: false,
};

export default ProductCard;

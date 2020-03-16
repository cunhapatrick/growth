import React from 'react';
import PropTypes from 'prop-types';

// Icons
import {
	ShoppingTwoTone,
	CaretUpFilled,
	CaretDownFilled,
} from '@ant-design/icons';

// Antd components
import { Pagination, Row, Button, Skeleton } from 'antd';

// Components
import ProductCard from 'components/ProductCard';

// CSS
import * as Style from './Home.style';

const LoadingCard = (
	<Row gutter={16}>
		{[
			'skeleton1',
			'skeleton2',
			'skeleton3',
			'skeleton4',
			'skeleton5',
			'skeleton6',
			'skeleton7',
			'skeleton8',
		].map((skeleton) => (
			<Style.Col key={skeleton} xs={12} md={6}>
				<Style.Card className="card-loading">
					<Skeleton loading active paragraph={{ rows: 8 }} />
				</Style.Card>
			</Style.Col>
		))}
	</Row>
);

export const Home = ({
	currentProducts,
	addFavorite,
	removeFavorite,
	favorites,
	page,
	handlePagination,
	isLogged,
	order,
	loaded,
	handleOrder,
	currentPage,
}) => {
	const renderLoaded =
		currentProducts.length > 0 ? (
			<>
				{/* Product Grid */}
				<Row gutter={16}>
					{currentProducts.map((product) => (
						<Style.Col key={product.id} xs={12} md={6}>
							<ProductCard
								product={product}
								addFavorite={addFavorite}
								removeFavorite={removeFavorite}
								isFavorite={favorites.some((f) => f.id === product.id)}
								isLogged={isLogged}
								showFavorite
							/>
						</Style.Col>
					))}
				</Row>
				{/* Pagination */}
				<Row justify="center">
					<Style.Col pull={1}>
						<Pagination
							defaultCurrent={page.number}
							current={currentPage}
							pageSize={8}
							hideOnSinglePage
							onChange={handlePagination}
							total={page.total}
						/>
					</Style.Col>
				</Row>
			</>
		) : (
			<Row justify="center">
				<Style.Col>
					<Style.Empty
						image={<ShoppingTwoTone />}
						imageStyle={{ fontSize: 240, height: 240 }}
						description="No product found"
					/>
				</Style.Col>
			</Row>
		);

	return (
		<>
			<Style.PageHeader
				title="Products"
				extra={[
					'Order: ',
					<Button
						key="dsf"
						type="link"
						onClick={() => (order === 1 ? handleOrder(-1) : handleOrder(1))}
					>
						{order === 1 ? 'A-Z' : 'Z-A'}{' '}
						{order === 1 ? <CaretDownFilled /> : <CaretUpFilled />}
					</Button>,
				]}
			/>
			<Style.Container>{loaded ? renderLoaded : LoadingCard}</Style.Container>
		</>
	);
};

Home.propTypes = {
	/* store states */
	page: PropTypes.object.isRequired,
	favorites: PropTypes.array.isRequired,
	currentProducts: PropTypes.array.isRequired,
	loaded: PropTypes.bool.isRequired,
	/* store funcs */
	addFavorite: PropTypes.func.isRequired,
	removeFavorite: PropTypes.func.isRequired,
	/* local state */
	order: PropTypes.number.isRequired,
	currentPage: PropTypes.number.isRequired,
	/* local funcs */
	handlePagination: PropTypes.func.isRequired,
	handleOrder: PropTypes.func.isRequired,
	/* prop state */
	isLogged: PropTypes.bool.isRequired,
	// productsRequest: PropTypes.func.isRequired,
};

export default Home;

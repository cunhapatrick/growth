import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

// Antd components
import { Pagination, Row, Col } from 'antd';

// Components
import ProductCard from 'components/ProductCard';

// Functions

// CSS
import * as Style from './Favorites.style';

// const LoadingCard = lazy(() => import('components/Skeleton'));
const LoadingCard = <div>Loading...</div>;

export const Favorites = ({ favorites, page, handlePagination, goBack }) => (
	<>
		<Style.PageHeader title="Favoritos" onBack={() => goBack()} />
		{favorites.length > 0 ? (
			<>
				<Style.Row justify="center">
					{favorites.map((product) => (
						<Col key={product.id} span={5}>
							<Suspense fallback={LoadingCard}>
								<ProductCard product={product} />
							</Suspense>
						</Col>
					))}
				</Style.Row>
				{favorites.length > 0 && (
					<Style.Row justify="center">
						<Col>
							<Pagination
								defaultCurrent={page.number}
								onChange={handlePagination}
								total={page.total}
							/>
						</Col>
					</Style.Row>
				)}
			</>
		) : (
			<Row justify="center" align="bottom">
				<Col>
					<Style.Empty
						imageStyle={{
							width: 240,
							height: 240,
						}}
						image={<img src="img/icons/broken-heart.png" alt="broken-heart" />}
						description="Sem itens favoritados"
					/>
				</Col>
			</Row>
		)}
	</>
);

Favorites.propTypes = {
	favorites: PropTypes.array.isRequired,
	page: PropTypes.object.isRequired,
	handlePagination: PropTypes.func.isRequired,
	goBack: PropTypes.func.isRequired,
};

export default Favorites;

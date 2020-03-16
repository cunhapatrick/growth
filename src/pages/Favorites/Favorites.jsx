import React from 'react';
import PropTypes from 'prop-types';

// Antd components
import { Pagination, Row, Col } from 'antd';

// Components
import ProductCard from 'components/ProductCard';

// CSS
import * as Style from './Favorites.style';

export const Favorites = ({ favorites, page, handlePagination, goBack }) => (
	<>
		<Style.PageHeader title="Favorites" onBack={() => goBack()} />
		{favorites.length > 0 ? (
			<>
				<Style.Row justify="center" gutter={16}>
					{favorites.map((product) => (
						<Col key={product.id} span={5} xs={12} md={6}>
							<ProductCard product={product} />
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
							width: 290,
							height: 240,
						}}
						image={<img src="img/icons/broken-heart.png" alt="broken-heart" />}
						description="No favorite item registred"
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

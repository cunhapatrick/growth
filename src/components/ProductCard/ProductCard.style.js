import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card, Button as btn } from 'antd';

export const Container = styled.div`
	> button {
		opacity: 0;
	}
	&:hover > button {
		opacity: 1;
	}
`;

export const ActionButton = styled(Link)`
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	border: none;
	position: absolute;
	background-color: transparent;
	background-repeat: no-repeat;
	outline: none;
	overflow: hidden;
`;

export const CardProduct = styled(Card)`
	img {
		padding: 2rem;
		height: 292px;
	}
	height: 370px;
	max-height: 370px;
	@media (max-width: 568px) {
		height: 190px;
		max-height: 190px;
		img {
			padding: 0.45rem;
			height: 125px;
		}
	}
`;

export const CardProductMeta = styled(Card.Meta)`
	color: black;
`;

export const FloatButton = styled(btn)`
	position: absolute;
	top: 10px;
	right: 10px;
	z-index: 1;
`;

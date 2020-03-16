import styled from 'styled-components';
import {
	Col as col,
	Empty as empty,
	PageHeader as pageHeader,
	Card as card,
} from 'antd';

export const Container = styled.div``;

export const Col = styled(col)`
	margin-bottom: 2rem;
`;

export const Empty = styled(empty)`
	margin-top: 10vh;
	font-weight: bold;
	font-size: 24px;
`;

export const PageHeader = styled(pageHeader)`
	padding-left: 0;
	padding-right: 0;

	.ant-page-header-heading {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.ant-page-header-heading-extra {
		font-weight: bold;
		font-size: 1rem;
		padding: 0;
		text-align: right;

		button {
			color: black;
			width: 75px;
			@media (min-width: 320px) and (max-width: 760px) {
				width: 50px;
			}
			padding: 0;
		}
	}
`;

export const Card = styled(card)``;

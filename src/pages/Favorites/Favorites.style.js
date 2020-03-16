import styled from 'styled-components';
import { Row as row, Empty as empty, PageHeader as pageHeader } from 'antd';

export const Row = styled(row)`
	margin-top: 30px;
`;

export const Empty = styled(empty)`
	text-align: center;
	font-size: 24px;
	font-weight: bold;
`;

export const PageHeader = styled(pageHeader)`
	padding: 20px 50px;
	@media (min-width: 320px) and (max-width: 760px) {
		padding: 0;
	}
	margin: 0 5%;

	.ant-page-header-heading-extra {
		font-weight: bold;
		font-size: 16px;

		button {
			color: black;
			width: 75px;
			padding: 0;
		}
	}
`;

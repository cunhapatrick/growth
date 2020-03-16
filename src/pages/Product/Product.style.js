import styled from 'styled-components';

import { PageHeader as pageHeader } from 'antd';

export const Container = styled.div`
	padding: 30px 50px;
	@media (min-width: 320px) and (max-width: 760px) {
		padding: 10px;
		margin-bottom: 15px;
		max-width: 300px;
	}
	background: white;

	img {
		width: 250px;
		height: 250px;
	}

	div:not(.ant-row) {
		margin-top: 15px;
		word-break: break-all;

		&.title {
			margin-left: 15px;
			margin-bottom: 10px;
			font-weight: bolder;
			font-size: 36px;
		}

		&.subtitle {
			width: 100%;
			font-weight: bold;
			font-size: 24px;
		}

		&.description {
			width: 100%;
			font-size: 18px;
		}
	}
`;

export const PageHeader = styled(pageHeader)`
	@media (min-width: 320px) and (max-width: 760px) {
		padding: 0;
		margin: 0;
	}

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

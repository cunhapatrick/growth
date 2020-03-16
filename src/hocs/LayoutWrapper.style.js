import styled from 'styled-components';
import { Layout } from 'antd';

export const Content = styled(Layout.Content)`
	max-width: 1140px;
	@media (min-width: 768px) {
		min-width: 768px;
	}
	@media (min-width: 1140px) {
		min-width: 1140px;
	}
	margin: 0 auto;
	padding: 0 15px;
	min-height: calc(100vh - 200px);
	@media (min-width: 320px) and (max-width: 760px) {
		padding: 0 25px;
		min-height: calc(100vh - 125px);
	}
`;

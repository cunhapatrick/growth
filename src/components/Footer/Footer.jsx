import React from 'react';
import { CopyrightOutlined } from '@ant-design/icons';

// CSS
import * as Style from './Footer.style';

const Footer = () => (
	<Style.Footer id="footer">
		React App {new Date().getFullYear()} <CopyrightOutlined /> Copyright
	</Style.Footer>
);

export default Footer;

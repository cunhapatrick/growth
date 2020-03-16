import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Col as col, Tag, Button as btn, Dropdown, Menu } from 'antd';

export const UserDropdown = styled(Dropdown)`
	margin-left: 7px;
`;

export const UserMenuItem = styled(Menu)``;
export const Header = styled.div``;
export const Container = styled.div``;
export const Col = styled(col)``;
export const CategoryCol = styled(Col)``;
export const NavLink = styled(Link)``;

export const Span = styled.span`
	margin-left: 15px;
`;

export const CheckableTag = styled(Tag.CheckableTag)`
	font-weight: normal;
	font-size: 1rem;
	padding: 5px;
	&:hover {
		cursor: pointer;
	}
`;

export const Button = styled(btn)`
	font-weight: bold;
`;

// Custom Styles
export const Navbar = styled.div`
	background-color: #fff159;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0.45rem 15px;
	box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
	position: relative;
	z-index: 3;
`;

export const NavbarLogo = styled.div`
	-webkit-box-flex: 1;
	flex: 1 9999 0%;
	min-width: 40px;
`;

export const NavbarSearch = styled.div`
	-webkit-box-flex: 0;
	flex: 0 1 auto;
	min-width: 125px;
	width: 420px;
`;

export const NavbarMenu = styled.div`
	-webkit-align-content: center;
	-ms-flex-line-pack: center;
	align-content: center;
	align-items: center;
	display: flex;
	-webkit-box-flex: 1;
	flex: 1 0 0%;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	flex-direction: row;
	flex-wrap: wrap;
	-webkit-box-pack: end;
	-ms-flex-pack: end;
	justify-content: flex-end;
`;

export const NavScroller = styled.div`
	position: relative;
	z-index: 2;
	height: 2.75rem;
	overflow-y: hidden;
`;

export const NavCategories = styled.nav`
	display: flex;
	flex-wrap: nowrap;
	padding-top: 0.45rem;
	padding-bottom: 1rem;
	padding-left: 15px;
	padding-right: 15px;
	margin-top: -1px;
	overflow-x: auto;
	text-align: center;
	white-space: nowrap;
	-webkit-overflow-scrolling: touch;
	background-color: white;
	align-items: center;
`;

export const UserNameSpan = styled.span`
	@media (max-width: 568px) {
		display: none !important;
	}
`;

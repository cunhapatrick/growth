import React from 'react';
import PropTypes from 'prop-types';

// Ant Design Components
import { Input } from 'antd';
import {
	TagFilled,
	UserOutlined,
	HeartOutlined,
	LoginOutlined,
	LogoutOutlined,
	SearchOutlined,
} from '@ant-design/icons';

// CSS
import * as Style from './Header.style';

const Header = ({
	isLogged,
	user,
	handleModalLogin,
	handleModalSignup,
	logout,
	handleSource,
	searchInput,
	handleSearchInput,
	tags,
	tagsList,
}) => {
	// User Menu Dropdown
	const userMenuItems = (
		<Style.UserMenuItem>
			<Style.UserMenuItem.Item>
				<Style.NavLink to="/favorite">
					<HeartOutlined /> Favorites
				</Style.NavLink>
			</Style.UserMenuItem.Item>
			<Style.UserMenuItem.Item onClick={logout}>
				<LogoutOutlined /> Logout
			</Style.UserMenuItem.Item>
		</Style.UserMenuItem>
	);
	// Guest Menu Dropdown
	const guestMenuItems = (
		<Style.UserMenuItem>
			<Style.UserMenuItem.Item
				icon={<LoginOutlined />}
				onClick={handleModalLogin}
			>
				Login
			</Style.UserMenuItem.Item>
			<Style.UserMenuItem.Item
				icon={<LogoutOutlined />}
				onClick={handleModalSignup}
			>
				Register
			</Style.UserMenuItem.Item>
		</Style.UserMenuItem>
	);

	return (
		<Style.Container>
			{/* Navbar */}
			<Style.Navbar>
				<Style.NavbarLogo>
					<Style.NavLink to="/">
						<img
							src="https://image.flaticon.com/icons/svg/2089/2089433.svg"
							width="32"
							height="32"
							alt="Logo"
							title="Logo"
						/>
					</Style.NavLink>
				</Style.NavbarLogo>
				<Style.NavbarSearch>
					{Object.keys(tagsList).length > 0 && (
						<Input
							size="large"
							value={searchInput}
							addonAfter={<SearchOutlined />}
							onChange={handleSearchInput}
							placeholder="Search products here..."
						/>
					)}
				</Style.NavbarSearch>
				<Style.NavbarMenu>
					{isLogged ? (
						<>
							<Style.UserDropdown
								overlay={userMenuItems}
								placement="bottomRight"
							>
								<Style.Button size="large" icon={<UserOutlined />}>
									<Style.UserNameSpan>{user.name}</Style.UserNameSpan>
								</Style.Button>
							</Style.UserDropdown>
						</>
					) : (
						<>
							<Style.UserDropdown
								overlay={guestMenuItems}
								placement="bottomRight"
							>
								<Style.Button
									id="btn-login"
									size="large"
									icon={<UserOutlined />}
								>
									<span>Login or Register</span>
								</Style.Button>
							</Style.UserDropdown>
						</>
					)}
				</Style.NavbarMenu>
			</Style.Navbar>
			{/* Category Menu */}
			{Object.keys(tagsList).length > 0 && (
				<Style.NavScroller>
					<Style.NavCategories>
						<div>
							<TagFilled /> Categorias:
						</div>

						{Object.entries(tagsList).map(([k, v]) => (
							<div key={k}>
								<Style.CheckableTag
									checked={tags.some((tag) => tag === k)}
									onChange={() => handleSource(k)}
								>
									{v}
								</Style.CheckableTag>
							</div>
						))}
					</Style.NavCategories>
				</Style.NavScroller>
			)}
		</Style.Container>
	);
};

Header.propTypes = {
	isLogged: PropTypes.bool.isRequired,
	handleModalLogin: PropTypes.func.isRequired,
	handleModalSignup: PropTypes.func.isRequired,
	logout: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired,
	handleSource: PropTypes.func.isRequired,
	searchInput: PropTypes.string.isRequired,
	handleSearchInput: PropTypes.func.isRequired,
	tags: PropTypes.array.isRequired,
	tagsList: PropTypes.object.isRequired,
};

export default Header;

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Modal, Input, Tooltip, Form } from 'antd';
import { UserOutlined, InfoCircleOutlined } from '@ant-design/icons';

const ModalLogin = ({ modalLogin, handleModalLogin, login }) => {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	const user = { name, password };

	const [form] = Form.useForm();

	const onSubmit = () => {
		form.validateFields().then(() => {
			form.resetFields();
			login(user);
		});
	};

	return (
		<Modal
			id="modal-login"
			title="User login"
			visible={modalLogin}
			onCancel={handleModalLogin}
			onOk={onSubmit}
			okText="Login"
		>
			<Form form={form}>
				<Form.Item
					name="name"
					rules={[
						{
							required: true,
							message: 'Invalid user name',
						},
					]}
				>
					<Input
						placeholder="User name"
						size="large"
						value={name}
						prefix={<UserOutlined />}
						suffix={
							<Tooltip title="Input your registred user name">
								<InfoCircleOutlined />
							</Tooltip>
						}
						onChange={({ target }) => setName(target.value)}
					/>
				</Form.Item>
				<Form.Item
					name="password"
					rules={[
						{
							required: true,
							message: 'Invalid password',
						},
					]}
				>
					<Input.Password
						style={{ marginTop: 10 }}
						size="large"
						value={password}
						placeholder="Input your password..."
						onChange={({ target }) => setPassword(target.value)}
					/>
				</Form.Item>
			</Form>
		</Modal>
	);
};

ModalLogin.propTypes = {
	modalLogin: PropTypes.bool.isRequired,
	login: PropTypes.func.isRequired,
	handleModalLogin: PropTypes.func.isRequired,
};

export default ModalLogin;

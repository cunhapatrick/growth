import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Modal, Form, Input, Tooltip } from 'antd';
import { UserOutlined, InfoCircleOutlined } from '@ant-design/icons';

const ModalSignup = ({ modalSignup, handleModalSignup, signup }) => {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [cpassword, setCpassword] = useState('');

	const user = { name, password, cpassword };

	const [form] = Form.useForm();

	const onSubmit = () => {
		form.validateFields().then(() => {
			form.resetFields();
			signup(user);
		});
	};

	return (
		<Modal
			id="modal-signup"
			title="User register"
			visible={modalSignup}
			onOk={onSubmit}
			okText="Register"
			onCancel={handleModalSignup}
		>
			<Form form={form}>
				<Form.Item
					name="name"
					rules={[
						{
							required: true,
							message: 'Please input the desired user name',
							whitespace: true,
						},
					]}
				>
					<Input
						value={name}
						placeholder="Desired user name"
						size="large"
						prefix={<UserOutlined />}
						suffix={
							<Tooltip title="Input a valid user name">
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
							message: 'Please input the desired password',
						},
						{
							min: 8,
							message: 'The password must have at least 8 caracters',
						},
					]}
				>
					<Input.Password
						value={password}
						size="large"
						placeholder="Desired password"
						onChange={({ target }) => setPassword(target.value)}
					/>
				</Form.Item>
				<Form.Item
					name="cpassword"
					rules={[
						{
							required: true,
							message: 'Please confirm your password',
						},
						({ getFieldValue }) => ({
							validator(rule, value) {
								if (!value || getFieldValue('password') === value) {
									return Promise.resolve();
								}

								// eslint-disable-next-line prefer-promise-reject-errors
								return Promise.reject(
									'The two passwords that you entered do not match!'
								);
							},
						}),
					]}
				>
					<Input.Password
						value={cpassword}
						size="large"
						placeholder="Confirm the password"
						onChange={({ target }) => setCpassword(target.value)}
					/>
				</Form.Item>
			</Form>
		</Modal>
	);
};

ModalSignup.propTypes = {
	modalSignup: PropTypes.bool.isRequired,
	signup: PropTypes.func.isRequired,
	handleModalSignup: PropTypes.func.isRequired,
};

export default ModalSignup;

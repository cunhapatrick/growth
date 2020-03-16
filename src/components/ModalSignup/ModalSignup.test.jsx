import React from 'react';
import { shallow } from 'enzyme';

// component
import ModalSignup from './ModalSignup';

const mockFn = jest.fn(() => {});

describe('Component test', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(
			<ModalSignup modalSignup handleModalSignup={mockFn} signup={mockFn} />
		);
	});

	it('Should render without crashing', () => {
		expect(wrapper.find('#modal-signup').length).toBeGreaterThan(0);
	});
});

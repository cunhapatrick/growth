import React from 'react';
import { shallow } from 'enzyme';

// component
import ModalLogin from './ModalLogin';

const mockFn = jest.fn(() => {});

describe('Component test', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(
			<ModalLogin modalLogin handleModalLogin={mockFn} login={mockFn} />
		);
	});

	it('Should render without crashing', () => {
		expect(wrapper.find('#modal-login').length).toBeGreaterThan(0);
	});
});

import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

// Component
import Footer from './Footer';

describe('Testing render of all elements', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Footer />);
	});

	it('Should render without crashing', () => {
		expect(wrapper.find('#footer').length).toBeGreaterThan(0);
	});
});

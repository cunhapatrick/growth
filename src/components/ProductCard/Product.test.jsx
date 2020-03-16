import React from 'react';
import { shallow } from 'enzyme';

// Component
import ProductCard from './ProductCard';

let wrapper;

describe('Component test', () => {
	beforeEach(() => {
		wrapper = shallow(<ProductCard product={{}} />);
	});

	it('Should render without crashing', () => {
		expect(wrapper.find('.product-card').length).toBeGreaterThan(0);
	});
});

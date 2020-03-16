import React from 'react';
import { shallow } from 'enzyme';

// Component
import Header from './HeaderContainer';

const mockFn = jest.fn(() => {});

describe('Testing render of all elements', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(
			<Header
				isLogged
				source={[]}
				searchInput=""
				handleModalLogin={mockFn}
				handleSearchInput={mockFn}
				handleModalSignup={mockFn}
				handleSider={mockFn}
				handleSearch={mockFn}
				handleSource={mockFn}
				logout={mockFn}
				user={{}}
				tagsList={{}}
			/>
		);
	});

	it('Should render without crashing', () => {
		expect(wrapper.find('#header').length).toBeGreaterThan(0);
	});
});

import React from 'react';
import renderer from 'react-test-renderer';
import { enableFetchMocks } from 'jest-fetch-mock';

import App from './App';

enableFetchMocks()
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('<App />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
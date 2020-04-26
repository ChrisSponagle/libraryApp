import React from 'react';
import renderer from 'react-test-renderer';
import { enableFetchMocks } from 'jest-fetch-mock';
import * as navigation from "react-navigation";

import DetailedInfo from './DetailedInfo';

enableFetchMocks()
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('<DetailedInfo />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<DetailedInfo />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
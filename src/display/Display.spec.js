import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'react-testing-library';

import 'jest-dom/extend-expect';

import Display from './Display';

describe('<Display />', () => {
    it('should match snapshot', () => {
        const tree = renderer.create(<Display />).toJSON();
        expect(tree).toMatchSnapshot();
    })

})
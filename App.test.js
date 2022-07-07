// @flow
import React from 'react';
import { findAllWithType, findWithType } from 'react-shallow-testutils';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from './App'

const renderApp = () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <App />
    )
    return renderer.getRenderOutput()
}

describe('App Component', () => {
    test('render correctly', () => {
        const result = renderApp()
        expect(result).toMatchSnapshot()
    });
});
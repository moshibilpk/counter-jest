// @flow
import React from 'react'
// import renderer from 'react-test-renderer'
import { Text } from 'react-native';

import Counter from './src/counter/Counter'
import App from './App'
import { findAllWithType, findWithType, isComponentOfType } from 'react-shallow-testutils';
import ShallowRenderer from 'react-shallow-renderer';
// import ShallowRenderer from 'react-test-renderer/shallow';


const renderApp = () => {
    renderer = new ShallowRenderer();
    renderer.render(
        <App />
    );
    return renderer.getRenderOutput();
};

// console.log("🚀 ~ file: Counter.test.js ~ line 21 ~ renderApp ~ renderApp", result)
describe('counter test correctly', () => {
    const result = renderApp()
    console.log("🚀 ~ file: Counter.test.js ~ line 26 ~ describe ~ result", result)

    test('0 visible in count', () => {
        const result = renderApp()
        expect(result).toMatchSnapshot()
        expect(findWithType(result, Counter).props.count).toEqual(0);
        // console.log("🚀 ~ file: Counter.test.js ~ line 28 ~ test ~ result", result)
        // const test = findAllWithType(wrapper, Counter);
        // expect(findAllWithType(wrapper, Counter))
        console.log("🚀 ~ file: Counter.test.js ~ line 22 ~ test ~ findAllWithType(wrapper, Counter)", findAllWithType(result, Counter, 'increment'))
        // const data = wrapper('0')
    })

    // test('Increment button visible', () => {
    //     const result = renderApp()
    //     expect(result).toMatchSnapshot()
    //     expect(findWithType(result, Counter).props.count).toEqual(0);

    // });
    
})
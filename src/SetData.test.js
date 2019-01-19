import React from 'react';
import setData from './SetData';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('test that it injects passed properties to the wrapped component as props', () => {
    var someData = {
        data : ["1", "2", "Fizz"]
    }
    const DisplayResult = ( props)  => <div className="testClass" key={props.index}>{props.result}</div>;

    const FrizzBuzzResult = setData({ data : someData })(DisplayResult)
    
    const wrapper = Enzyme.shallow(
        <FrizzBuzzResult />
      );
    expect(wrapper.prop('data').data[2]).toBe('Fizz');
});

it('test that it returns wrapped component', () => {
    var someData = {
        data : ["1", "2", "Fizz"]
    }
    const DisplayResult = ( props)  => <div key={props.index}>{props.result}</div>;

    const FrizzBuzzResult = setData({ data : someData })(DisplayResult)
    
    const wrapper = Enzyme.shallow(
        <FrizzBuzzResult />
      );
    expect(wrapper.html()).not.toBe(null);
});


it('test that it returns wrapped component with expected output', () => {
    var someData = {
        data : ["1", "2", "Fizz"]
    }
    const DisplayResult = ( props)  => <div className="testClass" key={props.index}>{props.result}</div>;

    const FrizzBuzzResult = setData({ data : someData })(DisplayResult)
    
    const wrapper = Enzyme.shallow(
        <FrizzBuzzResult />
      );
    expect(wrapper.find('.testClass')).not.toBe(null);
});
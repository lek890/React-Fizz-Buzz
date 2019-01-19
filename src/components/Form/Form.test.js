import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Test that on submit we get the value passed on to the props function passed into the component', () => {
    it('Test the limit value passing', () => {
      const mockCallBack = jest.fn();
      const limit = 2;
  
      const form = Enzyme.shallow((<Form limitUpdated={mockCallBack} limit={limit}></Form>));
      form.find('input').simulate('change', { target: { value: 3 } });
      form.find('button').simulate('click');
      expect(mockCallBack.mock.calls[0][0]).toBe(3);
    });
});

describe('Test that click on the button calls limitUpdated function', () => {
    it('Test click event', () => {
      const mockCallBack = jest.fn();
      const limit = 2;
  
      const form = Enzyme.shallow((<Form limitUpdated={mockCallBack} limit={limit}></Form>));
      form.find('button').simulate('click');
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
});

describe('Test that when a number >0 is entered the button is enabled', () => {
    it('Test the button disable', () => {
      const mockCallBack = jest.fn();
      const limit = 2;
  
      const form = Enzyme.shallow((<Form limitUpdated={mockCallBack} limit={limit}></Form>));
      form.find('input').simulate('change', { target: { value: 2 } });
      expect(form.find('button').prop('disabled')).not.toBeTruthy();
    });
});

describe('Test that when a number >0 is entered the button is disabled', () => {
    it('Test the button disable', () => {
      const mockCallBack = jest.fn();
      const limit = 2;
  
      const form = Enzyme.shallow((<Form limitUpdated={mockCallBack} limit={limit}></Form>));
      form.find('input').simulate('change', { target: { value: 0 } });
      expect(form.find('button').prop('disabled')).toBeTruthy();
    });
});

import React from 'react';
import ReactDOM from 'react-dom';
import DisplayResult from './DisplayResult';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DisplayResult data={[]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Test that the render prop is called', () => {
    it('', () => {
      const mockCallBack = jest.fn();
      const limit = 2;

      var someProps = {
          data : ["1", "2", "Fizz"]
      }
  
      const form = Enzyme.shallow((<DisplayResult {...someProps} render={ mockCallBack } ></DisplayResult>));
      expect(mockCallBack.mock.calls.length).toEqual(3);

    });
});

describe('Test that the render prop is called with correct values', () => {
    it('', () => {
      const mockCallBack = jest.fn();
      const limit = 2;

      var someProps = {
          data : ["1", "2", "Fizz"]
      }
  
      const form = Enzyme.shallow((<DisplayResult {...someProps} render={ mockCallBack } ></DisplayResult>));
      expect(mockCallBack.mock.calls[2][0]).toEqual("Fizz");
      expect(mockCallBack.mock.calls[1][0]).toEqual("2");
      expect(mockCallBack.mock.calls[0][0]).toEqual("1");

    });
});
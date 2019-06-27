import React from 'react';
import ReactDOM from 'react-dom';

import App from '../components/App';
import Book from '../components/book';
import Search from '../components/Search';

import axios from 'axios';
import mockAxios from 'axios';

import "./setupTests"
import { shallow, mount, render } from 'enzyme';
import { exportAllDeclaration, tsExternalModuleReference } from '@babel/types';
import { handleQuery } from '../components/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('App renders without crashing', () => {
  const wrapper = shallow(<App />);
});

it('Search renders without crashing', () => {
  const wrapper = shallow(<Search />);
  expect(wrapper.find('input').length).toBe(1);
  expect(wrapper.find('button').length).toBe(1);
});

it('Book renders correctly', () => {
  const wrapper = shallow(<Book />);

});


test('calls axios and returns books', async () => {

  mockAxios.get.mockImplementationOnce(()=> Promise.resolve({
    data: {
      results: ['test']
    }
  }));
  
  const wrapper = shallow(<App />);
  const books = wrapper.instance().getBooks('cat');
  
  console.log(books);

  // mockAxios.get(() =>
  // Promise.resolve({ data: { results: ['test']} 
  // })
  // );
  // expect(mockAxios.get).toEqual(['test']);

})



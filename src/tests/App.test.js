import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { exportAllDeclaration } from '@babel/types';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const generateGreeting = (name) => `hi ${name}!`;

test('should generate greeting', () => {
  const result = generateGreeting('Mike');
  expect(result).toBe(`hi Mike!`);
})
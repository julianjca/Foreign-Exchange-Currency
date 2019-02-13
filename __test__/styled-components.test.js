import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Button, Input, Error, Container } from '../components/StyledComponents';

test('Button Test', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('width', '25px');
  expect(tree).toHaveStyleRule('height', '25px');
  expect(tree).toHaveStyleRule('border-radius', '5px');
});

test('Error Test', () => {
  const tree = renderer.create(<Error />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', 'red');
});

test('Input Test', () => {
  const tree = renderer.create(<Input />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('width', '200px');
  expect(tree).toHaveStyleRule('height', '40px');
  expect(tree).toHaveStyleRule('border-radius', '10px');
  expect(tree).toHaveStyleRule('border', '1px solid #1a1a1a');
  expect(tree).toHaveStyleRule('margin', '10px auto');
  expect(tree).toHaveStyleRule('text-align', 'center');
});

test('Container Test', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('width', '100%');
  expect(tree).toHaveStyleRule('min-height', '100vh');
  expect(tree).toHaveStyleRule('flex-direction', 'column');
  expect(tree).toHaveStyleRule('padding', '5% 0');
  expect(tree).toHaveStyleRule('align-items', 'center');
  expect(tree).toHaveStyleRule('justify-content', 'center');
  expect(tree).toHaveStyleRule('display', 'flex');
});
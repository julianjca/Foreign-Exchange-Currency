import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Button } from '../components/StyledComponents';

test('it works', () => {
  const tree = renderer.create(<Button />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('width', '25px')
  expect(tree).toHaveStyleRule('height', '25px')
  expect(tree).toHaveStyleRule('border-radius', '5px')

})
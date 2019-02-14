import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MainComponent from '../pages/index';
import { currencies } from '../constants';

configure({ adapter: new Adapter() });

describe('CurrencyCard Component Test', () => {
  const wrapper = shallow(<MainComponent />);

  it('have currencies state with currencies data', () => {
    expect(wrapper.state('currencies')).toEqual(currencies);
  });

  it('have selectedCurrencies state equal an empty array', () => {
    expect(wrapper.state('selectedCurrencies')).toEqual([]);
  });

  it('have currentValue state equal 10', () => {
    expect(wrapper.state('currentValue')).toEqual(10);
  });

  it('have openDropDown state equal false', () => {
    expect(wrapper.state('openDropDown')).toEqual(false);
  });

  it('have inputCurrency state equal empty string', () => {
    expect(wrapper.state('inputCurrency')).toEqual('');
  });

  it('have errorMessage state equal empty string', () => {
    expect(wrapper.state('errorMessage')).toEqual('');
  });
});
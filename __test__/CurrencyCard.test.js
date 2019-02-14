import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CurrencyCard from '../components/CurrencyCard';
import { currencyDetails } from '../constants';

configure({ adapter: new Adapter() });

let mockRates = {
  CAD: 1.3243697479
};

const currentValue = 10;

describe('CurrencyCard Component Test', () => {
  const wrapper = shallow(<CurrencyCard
    currency="CAD"
    currentValue={currentValue}
    rates={mockRates}
  />);

  it('have currency details of Canadian Dollar', () => {
    expect(wrapper.state('currencyDetails')).toEqual(currencyDetails.CAD);
  });

  it('have currency rate of 1.3243697479', () => {
    expect(wrapper.state('currencyRate')).toEqual(mockRates.CAD);
  });
});
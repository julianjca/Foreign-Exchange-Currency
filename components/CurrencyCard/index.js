import React from 'react';
import axios from 'axios';

import { API_URL, currencyDetails } from '../../constants';

class CurrencyCard extends React.Component {
  state = {
    currencyRate: '',
    currencyDetails: ''
  }

  componentDidMount = async () => {
    const { currency } = this.props;
    try {
      let { data } = await axios(`${API_URL}`);
      let { rates } = data;
      this.setState({
        currencyRate: rates[currency],
        currencyDetails: currencyDetails[currency]
      })
    } catch (e) {
      this.setState({
        currencyRate: ''
      })
    }
  }

  render () {
    const { currency, currentValue } = this.props;

    return (
      <div>
        <h4>{ currentValue * this.state.currencyRate }</h4>
        <h5>1 USD = { currency } { this.state.currencyRate }</h5>
        <h5>{ this.state.currencyDetails }</h5>
      </div>
    )
  }
}





export default CurrencyCard;
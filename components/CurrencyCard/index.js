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
    const { currency } = this.props;

    return (
      <div>
        <h2>1 USD = { currency } { this.state.currencyRate }</h2>
        <h4>{ this.state.currencyDetails }</h4>
      </div>
    )
  }
}





export default CurrencyCard;
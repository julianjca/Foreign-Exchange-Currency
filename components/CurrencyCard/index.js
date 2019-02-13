import React from 'react';

import { currencyDetails } from '../../constants';
import { Card } from './style';

class CurrencyCard extends React.Component {
  state = {
    currencyRate: '',
    currencyDetails: ''
  }

  componentDidMount = async () => {
    const { currency, rates } = this.props;
    try {
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
      <Card>
        <h4>{ currentValue * this.state.currencyRate }</h4>
        <h4>1 USD = { currency } { this.state.currencyRate }</h4>
        <h4>{ currency } - { this.state.currencyDetails }</h4>
        <button onClick={() => this.props.removeCurrency(currency)}>Remove Currency</button>
      </Card>
    )
  }
}





export default CurrencyCard;
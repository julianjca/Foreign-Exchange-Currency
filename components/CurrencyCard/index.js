import React from 'react';

import { currencyDetails } from '../../constants';
import { Card } from './style';
import { Button } from '../StyledComponents';

class CurrencyCard extends React.Component {
  state = {
    currencyRate: '',
    currencyDetails: ''
  }

  componentDidMount = async () => {
    const { currency, rates } = this.props;
    this.setState({
      currencyRate: rates[currency],
      currencyDetails: currencyDetails[currency]
    })
  }

  render () {
    const { currency, currentValue } = this.props;

    return (
      <Card>
        <h4>{currency} { currentValue * this.state.currencyRate }</h4>
        <h4>1 USD = { currency } { this.state.currencyRate }</h4>
        <h4>{ currency } - { this.state.currencyDetails }</h4>
        <Button onClick={() => this.props.removeCurrency(currency)}>-</Button>
      </Card>
    )
  }
}





export default CurrencyCard;
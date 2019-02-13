import React from 'react';
import CurrencyCard from '../components/CurrencyCard';

class Home extends React.Component {
  state = {
    currencies: [
      "CAD",
      "IDR",
      "GBP",
      "CHF",
      "SGD",
      "INR",
      "MYR",
      "JPY",
      "KRW"
    ],
    selectedCurrencies: [],
    currentValue: 10
  }

  handleChange = event => {
    this.setState({
      currentValue: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>USD - United States Dollar</h3>
        <input type="text" value={this.state.currentValue} onChange={ this.handleChange } />
        <h6>{this.state.currentValue}</h6>
        {
          this.state.currencies.map(item=> {
            return (
              <CurrencyCard currency={item} key={item} currentValue={this.state.currentValue} />
            )
          })
        }
      </div>
    )
  }
}

export default Home

import React from 'react';
import CurrencyCard from '../components/CurrencyCard';
import { currencyList } from '../constants';

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
    currentValue: 10,
    openDropDown: false,
    inputCurrency: '',
    errorMessage: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick = () => {
    this.setState({
      openDropDown: true
    })
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      const exists = currencyList.find(item => {
        return item === this.state.inputCurrency;
      });
      if(exists) {
        const notChosen = this.state.currencies.find(item => {
          return item === this.state.inputCurrency;
        });
        if(notChosen) {
          this.setState({
            selectedCurrencies: this.state.selectedCurrencies.concat(exists),
            currencies: this.state.currencies.filter(e => e !== exists),
            openDropDown: false,
            inputCurrency: ''
          })
        }
        else {
          this.setState({
            errorMessage: 'currency already chosen',
            openDropDown: false,
            inputCurrency: ''
          })
        }
      }
      else {
        this.setState({
          errorMessage: 'currency not available',
          openDropDown: false,
          inputCurrency: ''
        })
      }
    }
  }

  removeCurrency = (currency) => {
    this.setState({
      currencies: this.state.currencies.concat(currency),
      selectedCurrencies: this.state.selectedCurrencies.filter(e => e !== currency),
    })
  }

  render() {
    return (
      <div>
        <h3>USD - United States Dollar</h3>
        <input
          type="text"
          value={this.state.currentValue}
          onChange={ this.handleChange }
          name="currentValue"
        />
        <h6>{this.state.currentValue}</h6>
        {
          this.state.selectedCurrencies.map(item=> {
            return (
              <CurrencyCard
                currency={item}
                key={item}
                currentValue={this.state.currentValue}
                removeCurrency={this.removeCurrency}
              />
            )
          })
        }
        {
          !this.state.openDropDown
          ?
          <button onClick={this.handleClick}>Add Currency</button>
          :
          <input
            type="text"
            value={this.state.inputCurrency}
            onChange={ this.handleChange }
            onKeyPress={this.handleKeyPress}
            name="inputCurrency"
          />
        }
        <h6>{this.state.errorMessage}</h6>
      </div>
    )
  }
}

export default Home

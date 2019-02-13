import React from 'react';
import CurrencyCard from '../components/CurrencyCard';
import { curencyList, currencyList } from '../constants';

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
            currencies: this.state.currencies.filter(e => e !== exists)
          })
        }
        else {
          this.setState({
            errorMessage: 'currency already chosen'
          })
        }
      }
      else {
        this.setState({
          errorMessage: 'currency not available'
        })
      }
    }
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
              <CurrencyCard currency={item} key={item} currentValue={this.state.currentValue} />
            )
          })
        }
        {
          this.state.openDropDown
          ?
          <button onClick={this.handleClick} />
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

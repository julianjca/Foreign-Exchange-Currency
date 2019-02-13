import React from 'react';
import CurrencyCard from '../components/CurrencyCard';
import { currencyList } from '../constants';
import { Container, Input, Error } from '../components/StyledComponents';

class Home extends React.Component {
  state = {
    currencies: currencyList,
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
      <Container>
        <h3>USD - United States Dollar</h3>
        <Input
          type="text"
          value={this.state.currentValue}
          onChange={ this.handleChange }
          name="currentValue"
        />
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
          <Input
            type="text"
            value={this.state.inputCurrency}
            onChange={ this.handleChange }
            onKeyPress={this.handleKeyPress}
            name="inputCurrency"
            placeholder="Input Currency Name"
          />
        }
        <Error>{this.state.errorMessage}</Error>
      </Container>
    )
  }
}

export default Home

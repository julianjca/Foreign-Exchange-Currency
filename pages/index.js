import React from 'react';
import axios from 'axios';

import CurrencyCard from '../components/CurrencyCard';
import { currencies, API_URL } from '../constants';
import { Container, Input, Error, Button } from '../components/StyledComponents';

class Home extends React.Component {
  state = {
    currencies,
    selectedCurrencies: [],
    currentValue: 10,
    openDropDown: false,
    inputCurrency: '',
    errorMessage: '',
    rates: {}
  }

  componentDidMount = async () => {
    try {
      let { data } = await axios(API_URL);
      let { rates } = data;
      this.setState({
        rates
      })
    } catch (e) {
      this.setState({
        rates: {},
        errorMessage: 'failed getting data from api'
      })
    }
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

  submitCurrency = () => {
    const exists = currencies.find(item => {
      return item.toUpperCase() === this.state.inputCurrency.toUpperCase();
    });
    if(exists) {
      const notChosen = this.state.currencies.find(item => {
        return item.toUpperCase() === this.state.inputCurrency.toUpperCase();
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

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.submitCurrency();
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
                rates={this.state.rates}
              />
            )
          })
        }
        {
          !this.state.openDropDown
          ?
          <Button
            onClick={this.handleClick}
          >
            +
          </Button>
          :
          <div>
            <Input
              type="text"
              value={this.state.inputCurrency}
              onChange={ this.handleChange }
              onKeyPress={this.handleKeyPress}
              name="inputCurrency"
              placeholder="Input Currency Name"
            />
            <Button
              onClick={this.submitCurrency}
              big
            >Submit</Button>
          </div>

        }
        <Error>{this.state.errorMessage}</Error>
      </Container>
    )
  }
}

export default Home

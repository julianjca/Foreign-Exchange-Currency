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
    ]
  }
  render() {
    return (
      <div>
        {
          this.state.currencies.map(item=> {
            return (
              <CurrencyCard currency={item} key={item} />
            )
          })
        }
      </div>
    )
  }
}

export default Home

import React from 'react'

class Home extends React.Component {
  state = {
    currencies = [
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
      <div>Home Page</div>
    )
  }
}

export default Home

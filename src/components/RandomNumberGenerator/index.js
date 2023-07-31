import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state: {numb: 0}

  render() {
    const {numb} = this.state

    return (
      <div className="container">
        <h1 className="heading">Random Number</h1>
        <p className="description">
          Generate a random number in the range of O to 100
        </p>
        <button className="button" type="submit">
          Generate
        </button>
        <p className="random-number">{numb}</p>
      </div>
    )
  }
}

export default RandomNumberGenerator

// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, isOddEven: 'Even'}

  onIncrement = () => {
    const {count, isOddEven} = this.state
    const x = Math.floor(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + x}))
    console.log((count + x) % 2)

    if ((count + x) % 2 === 0) {
      console.log('Even')
      this.setState(() => ({isOddEven: 'Even'}))
    } else {
      console.log('odd')
      this.setState(() => ({isOddEven: 'Odd'}))
    }
  }

  render() {
    const {count, isOddEven} = this.state
    return (
      <div className="container">
        <h1>Count {count}</h1>
        <p className="desc">Count is {isOddEven}</p>
        <button type="button" className="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p>*Increase by random number between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp

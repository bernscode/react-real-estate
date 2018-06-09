import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'bern'
    }
  }
  clickedBtn = () => {
    console.log('bernscode test')
  }
  render () {
    return (<div>bernscode</div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)

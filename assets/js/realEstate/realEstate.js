import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'bern'
    }
  }
  render () {
    return (<div>
      <Header /> 
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)

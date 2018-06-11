import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './Filter.js'
import Listings from './Listings'

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
        <section id="contetn-area">
        <Filter />
        <Listings />
      </section>
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)

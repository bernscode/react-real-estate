import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './Filter.js'
import Listings from './Listings'
import listingsData from './data/listingsData.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'bern',
      listingsData
    }

    this.change = this.change.bind(this)
  }

  // method for filter
  change() {

  }


  render () {
    console.log(this.state)
    return (<div className="whole-screen">
      <Header />
    <section id="content-area">
        <Filter change={this.change} />
      <Listings listingsData={this.state.listingsData} />
      </section>
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)

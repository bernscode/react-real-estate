import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './Filter.js'
import Listings from './Listings'
import listingsData from './data/listingsData.js'
// Filter items with text fields

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'bern',
      listingsData,
      city: 'all',
      homeType: 'all',
      bedroom: 0,
      bathroom: 0,
      min_price: 0,
      max_price: 10000000,
      min_squareFeet: 0,
      max_squareFeet: 10000,
      min_lotSize: 0,
      max_lotSize: 50000,
      Fireplace: false,
      Garage: false,
      Guest_House: false,
      Swimming_Pool: false,
      filteredData: listingsData
    }

    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
  }

  // method for filter
  change(event) {
    var name = event.target.name
    var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value

    this.setState({
      [name]: value
    }, () => {
      console.log(this.state)

      this.filteredData()
    })
    // test for target value
    // console.log(event.target.value)
  }

  // method for filtering data
  filteredData() {
    var newData = this.state.listingsData.filter((item) => {
      return item.price >= this.state.min_price &&
      item.price <= this.state.max_price &&
      item.squareFeet >= this.state.min_squareFeet && item.squareFeet <= this.state.max_squareFeet &&
      item.lotSize >= this.state.min_lotSize &&
      item.lotSize <= this.state.max_lotSize
    })

    if(this.state.city != "all") {
      newData = newData.filter((item) => {
        return item.city == this.state.city
      })
    }


    this.setState({
      filteredData: newData
    })
  }

  render () {
    return (<div className="whole-screen">
      <Header />
    <section id="content-area">
        <Filter change={this.change} globalState={this.state} />
      <Listings listingsData={this.state.filteredData} />
      </section>
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)

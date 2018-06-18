import React, { Component} from 'react'


export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'bern'
    }
  }
  render () {
    return (<section id="filter">
    <div className="inside">
      <h4>Filter</h4>
    {/* setup change() */}
    <select name="neighborhood" className="filters neighborhood" onChange={this.props.change}>
        <option value="Los Angeles County">Los Angeles County</option>
        <option value="Orange County">Orange County</option>
        <option value="Ventura County">Ventura County</option>
      </select>
      <select name="houseType" className="filters houseType" onChange={this.props.change}>
        <option value="Houses">Houses</option>
        <option value="Condos">Condos</option>
        <option value="Townhomes">Townhomes</option>
        <option value="Manufacured">Manufacured</option>
        <option value="Lots / Land">Lots / Land</option>
      </select>
      <select name="bedroom" className="filters bedroom" onChange={this.props.change}>
        <option value="1">1 Bedroom</option>
        <option value="2">2 Bedrooms</option>
        <option value="3">3 Bedrooms</option>
        <option value="4">4+ Bedrooms</option>
      </select>
      <select name="bathroom" className="filters bathroom" onChange={this.props.change}>
        <option value="1">1 Bathroom</option>
        <option value="2">2 Bathrooms</option>
        <option value="3">3 Bathrooms</option>
        <option value="4">4+ Bathrooms</option>
      </select>
      <div className="filters price" onChange={this.props.change}>
        <span className="title">Price</span>
        <input type="text" name="min-price" className="min-price" onChange={this.props.change} value="0" />
        <input type="text" name="max-price" className="max-price" onChange={this.props.change} value="10000000" />
      </div>
      <div className="filters squareFeet">
        <span className="title">Square Feet</span>
        <input type="text" name="min-squareFeet" className="min-squareFeet" onChange={this.props.change} value="0" />
        <input type="text" name="max-squareFeet" className="max-squareFeet" onChange={this.props.change} value="10000" />
      </div>
      <div className="filters lotSize">
        <span className="title">Lot Size</span>
        <input type="text" name="min-lotSize" className="min-lotSize" onChange={this.props.change} value="0" />
        <input type="text" name="max-lotSize" className="max-lotSize" onChange={this.props.change} value="50000" />
      </div>
      <div className="filters features">
        <span className="title">Features</span>
        <label htmlFor="features">
          <span>Garage</span>
        <input name="features" value="Garage" type="checkbox" onChange={this.props.change} />
        </label>
        <label htmlFor="features">
          <span>Swimming Pool</span>
        <input name="features" value="Swimming Pool" type="checkbox" onChange={this.props.change} />
        </label>
        <label htmlFor="features">
          <span>Fireplace</span>
        <input name="features" value="Fireplace" type="checkbox" onChange={this.props.change} />
        </label>
        <label htmlFor="features">
          <span>Guest House</span>
        <input name="features" value="Guest House" type="checkbox" onChange={this.props.change} />
        </label>
      </div>

    </div>
    </section>)
  }
}

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
      <select name="homeType" className="filters homeType" onChange={this.props.change}>
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
      <input type="text" name="min_price" className="min-price" onChange={this.props.change} value={this.props.globalState.min_price} />
    <input type="text" name="max_price" className="max-price" onChange={this.props.change} value={this.props.globalState.max_price} />
      </div>
      <div className="filters squareFeet">
        <span className="title">Square Feet</span>
      <input type="text" name="min_squareFeet" className="min-squareFeet" onChange={this.props.change} value={this.props.globalState.min_squareFeet} />
    <input type="text" name="max_squareFeet" className="max-squareFeet" onChange={this.props.change} value={this.props.globalState.max_squareFeet} />
      </div>
      <div className="filters lotSize">
        <span className="title">Lot Size</span>
        <input type="text" name="min_lotSize" className="min-lotSize" onChange={this.props.change} value={this.props.globalState.min_lotSize} />
        <input type="text" name="max_lotSize" className="max-lotSize" onChange={this.props.change} value={this.props.globalState.max_lotSize} />
      </div>
      <div className="filters features">
        <span className="title">Features</span>
        <label htmlFor="features">
          <span>Garage</span>
          <input name="Garage" value="Garage" type="checkbox" onChange={this.props.change} />
        </label>
        <label htmlFor="features">
          <span>Swimming Pool</span>
          <input name="Swimming_Pool" value="Swimming_Pool" type="checkbox" onChange={this.props.change} />
        </label>
        <label htmlFor="features">
          <span>Fireplace</span>
          <input name="Fireplace" value="Fireplace" type="checkbox" onChange={this.props.change} />
        </label>
        <label htmlFor="features">
          <span>Guest House</span>
          <input name="Guest_House" value="Guest_House" type="checkbox" onChange={this.props.change} />
        </label>
      </div>

    </div>
    </section>)
  }
}

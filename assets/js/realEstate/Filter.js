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
      <select name="houseType" className="filters houseType">
        <option>Houses</option>
        <option>Condos</option>
        <option>Townhomes</option>
        <option>Manufacured</option>
        <option>Lots / Land</option>
      </select>
      <select name="bedroom" className="filters bedroom">
        <option>1 Bedroom</option>
        <option>2 Bedroom</option>
        <option>3 Bedroom</option>
        <option>4+ Bedroom</option>
      </select>
      <select name="bathroom" className="filters bathroom">
        <option>1 Bathroom</option>
        <option>2 Bathroom</option>
        <option>3 Bathroom</option>
        <option>4+ Bathroom</option>
      </select>
      <div className="filters price">
        <span className="title">Price</span>
        <input type="text" name="min-price" className="min-price"/>
        <input type="text" name="max-price" className="max-price"/>
      </div>
      <div className="filters squareFeet">
        <span className="title">Square Feet</span>
        <input type="text" name="min-squareFeet" className="min-squareFeet"/>
        <input type="text" name="max-squareFeet" className="max-squareFeet"/>
      </div>
      <div className="filters lotSize">
        <span className="title">Lot Size</span>
        <input type="text" name="min-lotSize" className="min-lotSize"/>
        <input type="text" name="max-lotSize" className="max-lotSize"/>
      </div>
      <div className="filters features">
        <span className="title">Features</span>
        <label htmlFor="features">
          <span>Garage</span>
        <input name="features" value="Garage" type="checkbox" />
        </label>
        <label htmlFor="features">
          <span>Swimming Pool</span>
        <input name="features" value="Swimming Pool" type="checkbox" />
        </label>
        <label htmlFor="features">
          <span>Fireplace</span>
        <input name="features" value="Fireplace" type="checkbox" />
        </label>
        <label htmlFor="features">
          <span>Guest House</span>
        <input name="features" value="Guest House" type="checkbox" />
        </label>
      </div>

    </div>
    </section>)
  }
}

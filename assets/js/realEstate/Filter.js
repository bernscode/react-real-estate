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
      <select name="neighborhood" className="filters neighborhood">
        <option>Los Angeles County</option>
        <option>Orange County</option>
        <option>Ventura County</option>
      </select>
      <select name="house-type" className="filters house-type">
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
      <div className="filters square-feet">
        <span className="title">Square Feet</span>
        <input type="text" name="min-square-feet" className="min-square-feet"/>
        <input type="text" name="max-square-feet" className="max-square-feet"/>
      </div>
      <div className="filters lot-size">
        <span className="title">Lot Size</span>
        <input type="text" name="min-lot-size" className="min-lot-size"/>
        <input type="text" name="max-lot-size" className="max-lot-size"/>
      </div>
      <div className="filters features">
        <span className="title">Features</span>
        <label for="features">
          <span>Garage</span>
        <input name="features" value="Garage" type="checkbox" />
        </label>
        <label for="features">
          <span>Swimming Pool</span>
        <input name="features" value="Swimming Pool" type="checkbox" />
        </label>
        <label for="features">
          <span>Fireplace</span>
        <input name="features" value="Fireplace" type="checkbox" />
        </label>
        <label for="features">
          <span>Guest House</span>
        <input name="features" value="Guest House" type="checkbox" />
        </label>
      </div>

    </div>
    </section>)
  }
}

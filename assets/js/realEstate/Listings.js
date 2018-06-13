import React, { Component} from 'react'


export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
      name: 'bern'
    }
  }
  render () {
    return (<section className="listings">
      <section className="search-area">
        <input type="text" name="search" />
      </section>

      <section className="sort-by-area">
        <div>390 results found</div>
      <div className="sort-options">
        <select name="sort-by" className="sort-by">
          <option value="price-asc">Highest Price</option>
        <option value="price-dsc">Lowest Price</option>
        </select>
        <div className="view">
          <i className="fa fa-th-list" aria-hidden="true"></i>
          <i className="fa fa-th" aria-hidden="true"></i>
        </div>
      </div>
      </section>

      <section className="listings-results">
        <div className="listing">
          <div className="listing-img">
            <span className="address">Address</span>
            <div className="details">
              <div className="user-img">

              </div>
              <div className="user-details">
                <span className="user-name">
                  Claudia Medrano
                </span>
                <span className="user-name">
                  06/12/2018
                </span>
              </div>
              <div className="listing-details">
                <div className="square-feet">
                  <i className="fa fa-square-o" aria-hidden="true"></i>
                  1000 ft&sup2;
                </div>
                <i className="fa fa-bed" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pagination">

      </section>
    </section>)
  }
}

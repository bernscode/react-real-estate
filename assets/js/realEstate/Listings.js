import React, { Component} from 'react'


export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
      name: 'bern'
    }
  }
  render () {
    return (<section id="listings">
      <section className="search-area">
        <input type="text" name="search" />
      </section>

      <section className="sort-by-area">
        <div className="results">390 results found</div>
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
            <span className="address">515 Sherwood Dr.</span>
            <div className="details">
              <div className="col-md-3">
                <div className="user-img">
                </div>
              </div>
              <div className="col-md-9">
                <div className="user-details">
                  <span className="user-name">
                    Hector A. Bernal
                  </span>
                  <span className="post-date">
                    06/12/2018
                  </span>
                </div>
                <div className="listing-details">
                  <div className="square-feet">
                    <i className="fa fa-square-o" aria-hidden="true"></i>
                  <span>2523 ft&sup2;</span>
                  </div>
                  <div className="bedrooms">
                    <i className="fa fa-bed" aria-hidden="true"></i>
                    <span>3 Bedrooms</span>
                  </div>
                </div>

                <div className="view-btn">
                  View Listing
                </div>

              </div>

            </div>
          </div>
          <div className="bottom-info">
            <span className="price">
              $2000 / month
            </span>
            <span className="location">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              Hollywood, CA
            </span>
          </div>
        </div>
      </section>

      <section className="pagination">
        <ul className="pagination-nums">
          <li>Prev</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>Next</li>
        </ul>

      </section>
    </section>)
  }
}

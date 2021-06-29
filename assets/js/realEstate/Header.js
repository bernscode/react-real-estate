import React, { Component} from 'react'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'bern'
    }
  }
  render () {
    return (<header>
      <div className="logo"><span>bern</span>Estates</div>

      <nav>
        <a className="topNavBtn" href="#">Create Ads</a>
        <a className="topNavBtn" href="#">About Us</a>
        <a className="topNavBtn" href="#">Log In</a>
        <a href="#" className="header-btn topNavBtn">Register</a>
        {/* <a href="#" className="header-btn filters-btn">Filters</a> */}
        <div id="navBtn" className="nav-btn">
          <div className="nav-line top-line"></div>
          <div id="middleLine" className="nav-line middle-line"></div>
          <div className="nav-line bottom-line"></div>
        </div> 
      </nav>
    </header>)
  }
}

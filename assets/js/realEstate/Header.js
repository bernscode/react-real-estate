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
        <a href="#" className="register-btn">Register</a>
      </nav>

    </header>)
  }
}

import React, { Component } from 'react'
import './header.css'

class Header extends Component {
  render () {
    return (
      <div className = "header">
        <div className = "div_task">task</div>       
        <ul className = "ul_Header">
          <li>  Home    </li>
          <li>  Reviews </li>
          <li>  Contact </li>
        </ul>
      </div>
    )
  }
}

export default Header

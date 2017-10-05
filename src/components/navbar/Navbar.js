import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {

  render(){
    return(
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm justify-content-between">
        <div className="container-fluid">
        <a href="/" className="navbar-brand">LotBot</a>
        <div className="navbar-collapse collapse justify-content-stretch" id="collapsingNavbar">
          <ul className="navbar-nav">

            <li className="nav-item">
              <NavLink className="nav-link" to="/lot-list">Lot List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/lot-overview">Lot Overview</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/transaction-report">Transaction Report</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
}

export default Navbar;
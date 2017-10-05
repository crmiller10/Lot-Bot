import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import OccupancyTracker from './OccupancyTracker'

class LotLink extends Component {

  render(){

    return(
      <Link className="list-group-item list-group-item-action" to={'/lots/'+this.props.lot.id}>
        <h5>{this.props.lot.id}</h5>
        <OccupancyTracker currentLot={this.props.lot.id}/>
      </Link>
    )
  }
}

export default LotLink;
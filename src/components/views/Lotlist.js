import React, { Component } from 'react';
import LotList from '../LotList';

class Lotlist extends Component {


  render(){
    return(
      <div className="row">
        <div className="col-sm-6">
          <h4>Select to View Lot Details</h4>
          <LotList />
        </div>
      </div>
    )
  }
}

export default Lotlist;
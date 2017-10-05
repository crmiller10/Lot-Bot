import React, { Component } from 'react';

import LotLink from './LotLink';
import { connect } from 'react-redux';

class LotList extends Component {

  render(){

  const lot = this.props.lots.map((lot, index) =>
    <LotLink key={index} lot={lot} />);

    return(
      <div className="list-group">
        {lot}
      </div>
    )
  }
}

//retrieve the state data from the store
function mapState2Props(state){
  return{
    lots: state.lots,
  }
}
//retrieve the actions to be used to upstate the store
function mapDispatch2Props(dispatch){
  return{

  }
}

 export default connect(mapState2Props, mapDispatch2Props) (LotList);
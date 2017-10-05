import React, { Component } from 'react';

import { connect } from 'react-redux';

import LotLink from './LotLink';

class NavBar extends Component {

render(){

  const lots = this.props.lots.map((lot, index) =>
    <LotLink key={index} lot={lot} />);

  return(
        <div className="list-group">
          {lots}
        </div>
      )
    }
  }
//retrieve the state data from the store
function mapState2Props(state) {
  return {
    lots: state.lots,
  }
}
//retrieve the actions to be used to upstate the store
function mapDispatch2Props(dispatch) {
  return {}
}
export default connect(mapState2Props, mapDispatch2Props) (NavBar);
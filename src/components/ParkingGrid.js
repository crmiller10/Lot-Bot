import React, { Component } from 'react';

import {connect} from 'react-redux';

import Space from './Space';

class ParkingGrid extends Component {

  render(){
    //name of the currentLot
    const currentLot = parseInt(this.props.currentLot);
    console.log(currentLot)

    //map through the lots that are currently held in the store and find the one whose name matches the value of the current lot.
    console.log(this.props.lots[currentLot])

    const lot = this.props.lots[currentLot]
      console.log(lot)
    //   //iterate through the spots array for the matching lot

    // lot.spaces.map( (space, index) => <Space key={index} car={space.car}/>))}
      let spaces = null;
      if (lot !== undefined) {
        spaces = lot.spaces.map( (space, index) => <Space key={index} id={index} lot={currentLot} space={space}/>);
      }

    // });

    console.log(spaces)
    return(
      <div className="parkingGrid">
        {spaces}
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

 export default connect(mapState2Props, mapDispatch2Props) (ParkingGrid);

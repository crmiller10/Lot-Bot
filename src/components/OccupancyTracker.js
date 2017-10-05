import React, { Component } from 'react';

import { connect } from 'react-redux';


class OccupancyTracker extends Component {

  render(){

    let car = this.props.car;

    //name of current lot in the lot overview
    const currentLot = this.props.currentLot;

    //counters will be used to measuere occupancy
    let total = 0;
    let occupied = 0;
    let available = total + occupied;


      //map the lots held in the store. Find lot name that matches the value of the current lot.
    const Tracker = this.props.lots.map(lot => {if (lot.id === currentLot){
        //map spots array to the coressponding lot. If value car is null, add one to the available counter. If there is a value, add 1 to the occuied counter.
        lot.spaces.map(spot => {
          if (spot === null){
            available++
          } else if (spot !== null){
            occupied++
          }
        })
    }});

    return(
        <p> Occupied:{occupied} Available:{available} Total:{(available + occupied)} </p>
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
  return{}
}

 export default connect(mapState2Props, mapDispatch2Props) (OccupancyTracker);
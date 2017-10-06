import React, { Component } from 'react';

//import from router
import { withRouter } from 'react-router-dom';

import NavBar from '../NavBar';
import ParkingGrid from '../ParkingGrid';
import OccupancyTracker from '../OccupancyTracker';

class LotOverview extends Component {


  render(){

    const rp = this.props.match.params.id;

    return(
    <div>
      <div className="row">
        <div className="col-sm-4">
          <NavBar />
        </div>
        <div className="col-sm-8">
        <div className="text-center">
          <h1>Lot{rp}</h1>
          <OccupancyTracker currentLot={rp}/>
        </div>

          <ParkingGrid currentLot={rp} />
        </div>
      </div>
    </div>
    )
  }
}

export default withRouter(LotOverview);

// import React, { Component } from 'react';


// class LotOverview extends Component {
//   render() {
//     // const rp = this.props.match.params.id;

//     return (
//       <div className="">
//         <h2>lot overview</h2>
//       </div>
//     );
//   }
// }

// export default LotOverview;

// <div className="row">
//   <div className="col-md-8">
//     <img className="img-fluid" src={data[rp].image} alt=""/>
//   </div>
//   <div className="col-md-4">
//     <h2 className="mb-3">{data[rp].title}</h2>
//     <p>{data[rp].description}</p>
//     <p className="">Date Completed: <b className="ml-1">{data[rp].dateCompleted}</b></p>
//     <a className="btn btn-success btn-lg mt-3" target="_blank" href={data[rp].github}>View on GitHub</a>
//   </div>
// </div>
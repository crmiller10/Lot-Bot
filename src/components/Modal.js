import React, { Component } from 'react';

// // Random colors
// const colors = [
//   'rgba(255,0,0,0.5)',
//   'rgba(255,255,0,0.5)',
//   'rgba(0,255,0,0.5)',
//   'rgba(0,255,255,0.5)',
//   'rgba(0,0,255,0.5)'
// ];

// const randomColor = () => {
//   return colors[Math.floor(Math.random() * colors.length)];
// };

// // App
class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="App">
        <button className="open" onClick={this.toggleModal}>
          Open
        </button>
        {this.state.isOpen &&
          <Modal onToggleModal={this.toggleModal} />
        }
      </div>
    );
  }
}







// // import React, { Component } from 'react';

// // class Space extends Component {

// //   constructor(props){
// //     super(props);

// //     this.state = {
// //       occupied: false,
// //     }
// //   }

// //   handleClick(){
// //     //spot coordinates to pass back up to the modal dialog box to make the post request. If I had originally set the lot id as the lot identifier in the url, I wouldn't have had to pass the lotId back up from this location.
// //     let spotCoordinates= {
// //               spotId: this.props.id,
// //               lotId: this.props.lotId,
// //               occupied: this.props.transaction,
// //     };

// //     this.props.clicked(spotCoordinates)
// //   }

// //   render(){
// //     let styleSpace = {
// //       width: "20%",
// //       height: "80px",
// //       backgroundColor:"#fff",
// //       borderWidth: "1px",
// //       borderStyle: "solid",
// //       borderColor:"#A3A3A3",
// //     }

// //     // if( this.props.car === null){
// //     if( this.props.space === null){
// //       return(
// //       <div style={styleSpace} onClick={()=>this.handleClick()}></div>
// //       )
// //     } else {
// //       return(
// //       <div style={styleSpace} onClick={()=>this.handleClick()}>
// //         <h1 className="flex-center text-center">P</h1>
// //       </div>
// //       )
// //     }

// //   }
// // }

export default Modal
// // // <h1 className="car">&#128741;</h1>
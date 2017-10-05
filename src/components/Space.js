import React, { Component } from 'react';

class Space extends Component {

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

  render(){
    // let spotWrap = {
    //   width: "80px",
    //   height: "80px",
    //   display: "flex",
    //   backgroundColor:"#fff",
    //   borderWidth: "1px",
    //   borderStyle: "solid",
    //   borderColor: "#E2E6E7",
    // }

    // if( this.props.car === null){
    if( this.props.space === null){
      return(
      <div className="grid-cell open-modal" onClick={this.toggleModal}>
        <div className="spot available flex-center text-center">P</div>
        { this.state.isOpen && <Modal onToggleModal={ this.toggleModal } /> }
      </div>
      )
    } else {
      return(
        <div className="grid-cell open-modal" onClick={this.toggleModal}>
            <div className="spot occupied flex-center text-center">P</div>
          { this.state.isOpen && <Modal onToggleModal={ this.toggleModal } /> }
      </div>
      )
    }

  }
}

// Modal
const Modal = ({ onToggleModal }) => {
  return (
    <div
      className="background" onClick={onToggleModal}
    >
      <div
        className="window"
        onClick={event => event.stopPropagation()}
      >
        <button
          className="btn btn-primary close"
          onClick={onToggleModal}
        >
          Close here
        </button>
        <div className="form-group">
          <input className="form-control" type="text"/>
        </div>
        <div className="form-group">
          <input className="form-control" type="text"/>
        </div>
      </div>
    </div>
  );
};


export default Space;
// <h1 className="car">&#128741;</h1>
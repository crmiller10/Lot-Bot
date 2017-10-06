import React, { Component } from 'react';

import Modal from './Modal';

class Space extends Component {

 constructor(props) {
   super(props);
   this.state = {
     text: '',
     isOpen: false
   };
 }

 toggleModal = () => {
    fetch(`https://polar-atoll-91152.herokuapp.com/lots/${this.props.lot}/${this.props.id}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
       "licensePlate": this.state.text
      }),
    })//.then this.props.

   this.setState({
     isOpen: !this.state.isOpen
   });
 }




 handleText(event) {
   this.setState({
     text: event.target.value,
   });
   console.log(event.target.value)
 }


  render(){

    if( this.props.space === null){
      return(
      <div className="grid-cell">
        <div className="spot available flex-center text-center">P</div>
      </div>
      )
    } else {
      return(
        <div className="grid-cell">

          <button onClick={this.toggleModal}>
            Open the modal
          </button>

          <Modal show={this.state.isOpen}
            onClose={this.toggleModal}>
            Here's some content for the modal
            <input className="form-control" type="text" placeholder="text Title" value={this.state.text}
            onChange={event => this.handleText(event)}/>
          </Modal>

            <div className="spot occupied flex-center text-center">P</div>
      </div>
      )
    }
  }
}

export default Space;



// constructor(props) {
//   super(props);

//   this.state = { isOpen: false };
// }

// toggleModal = () => {
//   this.setState({
//     isOpen: !this.state.isOpen
//   });
// }

// render() {
//   return (
//     <div className="App">
//       <button onClick={this.toggleModal}>
//         Open the modal
//       </button>

//       <Modal show={this.state.isOpen}
//         onClose={this.toggleModal}>
//         Here's some content for the modal
//       </Modal>
//     </div>
//   );
// }
import React, { Component } from 'react';
//import router
import { Switch, Route, withRouter} from 'react-router-dom';
import '../styles/css/limitless/icons/icomoon/styles.css'
//import redux goodies
import { connect } from 'react-redux';

//import actions
import { displayLots } from '../actions';

//import views
import Navbar from './navbar/Navbar';
import Lotlist from './views/Lotlist';
import LotOverview from './views/LotOverview';


class App extends Component {

  componentDidMount(){
    this.props.display()
  }

  render() {

    return (
      <div className="App">
        <header className="App-header text-center">
          <h3>Lot Bot</h3>
        </header>
        <main>
        <div className="container-fluid">
            <Switch>
              <Route path='/lots/:id' component={LotOverview}/>
              <Route path='/' component={Lotlist}/>
            </Switch>
          </div>
        </main>
      </div>
    );
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
    display: function(){
      // fetch("https://theboatlot.herokuapp.com/lots")
      fetch("https://polar-atoll-91152.herokuapp.com/lots")
        .then(resp => resp.json())
        .then( resp =>
             dispatch(displayLots(resp))
        )
    }
  }
}

export default withRouter(connect(mapState2Props, mapDispatch2Props) (App));



// fetch('https://lotbot3000.herokuapp.com/lots/<lotid>/<spotid>', {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     yourinfo: 'your info goes here'
//   }),
// })
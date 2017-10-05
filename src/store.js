import { createStore } from 'redux';

function reducer(state, action){
  console.log(action)
  if (action.type === 'DISPLAY'){
    return {
      lots: action.payload,
    }
  }
  return state;
}

export default createStore(reducer, {
   lots: [],
  },

  // usage notes for devtools extension:
  // https://github.com/zalmoxisus/redux-devtools-extension#usage
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

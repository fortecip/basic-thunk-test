import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import allReducers from './allReducers.js';
import InnerComponent from './InnerComponent.js';
import thunk from 'redux-thunk';
import './App.css';

class App extends Component {
  render() {
    const store = createStore(allReducers, {}, applyMiddleware(thunk));
    return (
      <Provider store={store}>
	<div className="App">
	  <header className="App-header">
	    <InnerComponent />
	  </header>
	</div>
      </Provider>
    );
  }
}

export default App;

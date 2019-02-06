import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStore, bindActionCreators } from 'redux';
import { login } from './actions.js';
import axios from 'axios';

class InnerComponent extends Component {
  componentDidMount(){
    //this.props.login({success:true});
  }

  _onButtonClick = ()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos').then((response)=>{
      const { title } = response.data[0];
      this.props.login({title:title});
    });
  }
  render() {
    const { getStatus } = this.props;
    const title = getStatus && getStatus.title;
    return (
      <div className="App">
	<header className="App-header">
	  first Title: {title} 
	  <button onClick={this._onButtonClick}>
	    LOGIN
	  </button>
	</header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    getStatus : state.login,
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    login
  },dispatch)
}
export default connect(mapStateToProps,matchDispatchToProps)(InnerComponent);

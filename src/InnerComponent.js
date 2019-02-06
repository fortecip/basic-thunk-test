import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login,getData } from './actions.js';

class InnerComponent extends Component {
  componentDidMount(){
    //this.props.login({success:true});
  }

  _onButtonClick = ()=>{
    this.props.getData();
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
    login,
    getData
  },dispatch)
}
export default connect(mapStateToProps,matchDispatchToProps)(InnerComponent);

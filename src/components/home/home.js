import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getEmployeeData} from '../../actions/employee';
class Home extends Component {
  constructor(props) {
    super(props)
    this.props.getEmployeeData();
  }
	render() {
		return (
            <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h1>HOME</h1>
              </div>
              <div className="col-md-4">
              <h1>RIVAK SHAH</h1>
              </div>
              <div className="col-md-4">
              <h1>RIVAK SHAH</h1>
              </div>
            </div>
          </div>  
        );
    }
}

function mapStateToProps(state) {
	return {
	};
}

export default connect(
	mapStateToProps,
	{ getEmployeeData }
)(Home);


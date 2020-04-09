import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchCars from '../actions/index';

class CarsIndex extends Component {
  componentDidMount() {
    this.props.fetchCars(this.props.garage);
  }
  render() {
    return this.props.cars.map((car) => {
      return (
        <div className="car">
          <h3>{car.brand} {car.model}</h3>
          <p>Owner: {car.owner}</p>
        </div>
      );
    });
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}
function mapStateToProps(state) {
  return {
    garage: state.garage,
    cars: state.cars
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);

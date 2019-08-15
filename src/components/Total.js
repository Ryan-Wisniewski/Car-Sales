import React from 'react';

import { connect } from 'react-redux';
import {addFeature} from '../actions'

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
    // console.log('Total', state)
    return{
      car: state.car.price,
      additionalPrice: state.additionalPrice
    }  
  }
export default connect(mapStateToProps, {  })(Total);

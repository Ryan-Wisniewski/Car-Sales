import React from 'react';
import {connect} from 'react-redux'
import {removeFeature} from '../actions'
import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car ? (
        <ol type="1">
          {props.car.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};
const mapStateToProps = state => {
    // console.log('stateAddedFeatures', state.car)
    return {
        car: state.car.features
    }
}
//add the connector
export default connect(mapStateToProps, { removeFeature })(AddedFeatures);

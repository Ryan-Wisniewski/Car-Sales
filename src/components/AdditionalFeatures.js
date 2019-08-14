import React from 'react';

import { connect } from 'react-redux';
import {addFeature} from '../actions'

import AdditionalFeature from './AdditionalFeature';
const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};
//after connection make the mapStateToProps
const mapStateToProps = state => {
  // console.log('stateAdditionalFeatures', state.store)
  return{
    store: state.store
  }  
}

//connector here              //functions to use inside the obj
export default connect(mapStateToProps, { addFeature })(AdditionalFeatures);

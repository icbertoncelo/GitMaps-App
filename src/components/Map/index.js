import React from 'react';
import PropTypes from 'prop-types';

import MapView from 'react-native-maps';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ModalActions } from '~/store/ducks/modal';

const Map = ({ showModal }) => (
  <MapView
    style={{ flex: 1 }}
    region={{
      latitude: -27.2177659,
      longitude: -49.6451598,
      latitudeDelta: 0.0042,
      longitudeDelta: 0.0031,
    }}
    showsUserLocation
    loadingEnabled
    onLongPress={({ nativeEvent: { coordinate } }) => showModal(coordinate)}
  />
);

Map.propTypes = {
  showModal: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Map);

import React from 'react';
import MapView from 'react-native-maps';

const Map = () => (
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
  />
);

export default Map;

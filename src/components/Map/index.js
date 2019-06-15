import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ModalActions } from "~/store/ducks/modal";

import MapView, { Marker, Callout } from "react-native-maps";
import { UserIcon, Container, UserText, BioText } from "./styles";

const Map = ({ showModal, user: users }) => (
  <MapView
    style={{ flex: 1 }}
    region={{
      latitude: -27.2177659,
      longitude: -49.6451598,
      latitudeDelta: 0.0042,
      longitudeDelta: 0.0031
    }}
    showsUserLocation
    loadingEnabled
    onLongPress={({ nativeEvent: { coordinate } }) => showModal(coordinate)}
  >
    {users.data.map(user => (
      <Marker
        key={String(user.id)}
        id={user.id}
        coordinate={user.coordinate}
        title={user.login}
      >
        <UserIcon source={{ uri: user.avatar_url }} />
        <Callout title={user.login}>
          <Container>
            <UserText>{user.name}</UserText>
            {user.bio && <BioText>{user.bio}</BioText>}
          </Container>
        </Callout>
      </Marker>
    ))}
  </MapView>
);

Map.propTypes = {
  showModal: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    login: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
    avatar_url: PropTypes.string,
    coordinate: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number
    })
  }).isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ModalActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);

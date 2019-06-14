import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ModalActions } from '~/store/ducks/modal';

import { Modal as ModalComponent } from 'react-native';

import {
  Container,
  UserTextInput,
  Actions,
  CancelButton,
  SaveButton,
  Content,
  Title,
  ActionText,
} from './styles';

class Modal extends Component {
  static propTypes = {
    hideModal: PropTypes.func.isRequired,
    modal: PropTypes.shape({
      visible: PropTypes.bool,
    }).isRequired,
  };

  state = {};

  render() {
    const { modal, hideModal } = this.props;
    return (
      <ModalComponent
        animationType="slide"
        transparent
        visible={modal.visible}
        onRequestClose={() => {
          hideModal();
        }}
      >
        <Container>
          <Content>
            <Title>Add a new place</Title>
            <UserTextInput
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Github username"
              placeholderTextColor="#999"
              // value={place}
              // onChangeText={place => this.setState({ place })}
            />
            <Actions>
              <CancelButton
                onPress={() => {
                  hideModal();
                }}
              >
                <ActionText>Cancel</ActionText>
              </CancelButton>
              <SaveButton onPress={() => {}}>
                <ActionText>Save</ActionText>
              </SaveButton>
            </Actions>
          </Content>
        </Container>
      </ModalComponent>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
});

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);

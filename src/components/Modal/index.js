import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ModalActions } from '~/store/ducks/modal';
import { Creators as UserActions } from '~/store/ducks/user';

import { Modal as ModalComponent, ActivityIndicator } from 'react-native';

import {
  Container,
  UserTextInput,
  Error,
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
    addUserRequest: PropTypes.func.isRequired,
    modal: PropTypes.shape({
      visible: PropTypes.bool,
      cordinate: PropTypes.oneOfType([
        null,
        PropTypes.shape({
          latitude: PropTypes.number,
          longitude: PropTypes.number,
        }),
      ]),
    }).isRequired,
    user: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.oneOfType([null, PropTypes.string]),
    }).isRequired,
  };

  state = {
    userInput: '',
  };

  handleInputChange = userInput => this.setState({ userInput });

  handleHideModal = () => {
    const { hideModal } = this.props;

    hideModal();
    this.setState({ userInput: '' });
  };

  handleSubmit = () => {
    const {
      addUserRequest,
      user,
      modal: { coordinate },
    } = this.props;
    const { userInput } = this.state;

    if (user.loading) return;

    addUserRequest(userInput, coordinate);
    this.setState({ userInput: '' });
  };

  render() {
    const { modal, user } = this.props;
    const { userInput } = this.state;
    return (
      <ModalComponent
        animationType="slide"
        transparent
        visible={modal.visible}
        onRequestClose={this.handleHideModal}
      >
        <Container>
          <Content>
            <Title>Add a new place</Title>
            <UserTextInput
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Github username"
              placeholderTextColor="#999"
              value={userInput}
              onChangeText={this.handleInputChange}
            />
            {user.error && <Error>{user.error}</Error>}
            <Actions>
              <CancelButton onPress={this.handleHideModal}>
                <ActionText>Cancel</ActionText>
              </CancelButton>
              <SaveButton onPress={this.handleSubmit}>
                {user.loading ? (
                  <ActivityIndicator color="#fff" size="small" />
                ) : (
                  <ActionText>Save</ActionText>
                )}
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
  user: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ModalActions, ...UserActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);

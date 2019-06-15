import { call, put, select } from 'redux-saga/effects';
import api from '~/services/api';

import { Creators as UserActions } from '../ducks/user';
import { Creators as ModalActions } from '../ducks/modal';

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.username}`);

    const isDuplicated = yield select(state => state.user.data.find(user => user.id === data.id));

    if (isDuplicated) {
      yield put(UserActions.addUserFailure('User already exists'));
    } else {
      const userData = {
        id: data.id,
        name: data.name,
        avatar_url: data.avatar_url,
        login: data.login,
        bio: data.bio,
        coordinate: action.payload.coordinate,
      };

      yield put(UserActions.addUserSuccess(userData));
      yield put(ModalActions.hideModal());
    }
  } catch (err) {
    yield put(UserActions.addUserFailure('Error to add a new user'));
  }
}

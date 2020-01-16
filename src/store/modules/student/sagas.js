import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';


export function* signIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `/students/${id}`);

    const { id: studentId} = response.data;

    yield put(signInSuccess(studentId));

    // history.push('/students/list');
  } catch (err) {
    Alert.alert('Login Error', 'Verifie your id');
    yield put(signFailure());
  }
}

// export function setToken({ payload }) {
//   if (!payload) return;

//   const { token } = payload.auth;

//   if (token) {
//     api.defaults.headers.Authorization = `Bearer ${token}`;
//   }
// }

export function signOut() {
  // history.push('/');
}

export default all([
  // takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@student/SIGN_IN_REQUEST', signIn),
  takeLatest('@student/SIGN_OUT', signOut),
]);

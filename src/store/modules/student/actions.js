export function signInRequest(id) {
  return {
    type: '@student/SIGN_IN_REQUEST',
    payload: { id },
  };
}

export function signInSuccess(id, name) {
  return {
    type: '@student/SIGN_IN_SUCCESS',
    payload: { id, name },
  };
}

export function signFailure() {
  return {
    type: '@student/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@student/SIGN_OUT',
  };
}

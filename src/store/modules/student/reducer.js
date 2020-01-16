import produce from 'immer';

const INITIAL_STATE = {
  signed: false,
  id: null,
  loading: false,
};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@student/SIGN_IN_SUCCESS': {
        draft.id = action.payload.id;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@student/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@student/SIGN_OUT': {
        draft.id = null;
        draft.signed = false;
        break;
      }
      default:
    }
  });
}

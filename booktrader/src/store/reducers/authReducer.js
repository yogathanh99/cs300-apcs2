import * as actionTypes from '../actions/actionTypes';

const initState = {
  error: null,
  loading: false,
  verifyEmail: {
    error: null,
    loading: false,
  },
};

const cleanUp = state => {
  return {
    ...state,
    error: null,
    loading: false,
    verifyEmail: { ...state.verifyEmail, loading: false, error: null },
  };
};

const authStart = state => {
  return { ...state, loading: true };
};

const authFail = (state, payload) => {
  return { ...state, error: payload };
};

const authSuccess = state => {
  return { ...state, error: false };
};

const verifyStart = state => {
  return { ...state, verifyEmail: { ...state.verifyEmail, loading: true } };
};

const verifyFail = (state, payload) => {
  return {
    ...state,
    verifyEmail: {
      ...state.verifyEmail,
      loading: false,
      error: payload,
    },
  };
};

const verifySuccess = state => {
  return {
    ...state,
    verifyEmail: { ...state.verifyEmail, loading: false, error: false },
  };
};
export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state);

    case actionTypes.AUTH_FAIL:
      return authFail(state, action.payload);

    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state);

    case actionTypes.CLEAN_UP:
      return cleanUp(state);

    case actionTypes.VERIFY_START:
      return verifyStart(state);

    case actionTypes.VERIFY_SUCCESS:
      return verifySuccess(state);

    case actionTypes.VERIFY_FAIL:
      return verifyFail(state, action.payload);

    default:
      return state;
  }
};

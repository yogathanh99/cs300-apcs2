import * as actionTypes from '../actions/actionTypes';

const initState = {
  loading: true,
  books: [],
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BOOKS_START:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actionTypes.FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        books: action.payload,
      };

    case actionTypes.FETCH_BOOKS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

import * as actionTypes from '../actions/actionTypes';

const initState = {
  loading: false,
  booksData: [],
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
        booksData: action.payload,
      };

    case actionTypes.FETCH_BOOKS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case actionTypes.SEARCH_BOOKS_START:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actionTypes.SEARCH_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        booksData: [action.payload],
      };

    case actionTypes.SEARCH_BOOKS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case actionTypes.INSERT_BOOKS_START:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actionTypes.INSERT_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.INSERT_BOOKS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case actionTypes.TRADE_BOOKS_START:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actionTypes.TRADE_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.TRADE_BOOKS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

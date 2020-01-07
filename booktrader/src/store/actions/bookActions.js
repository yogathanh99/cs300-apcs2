import * as actionTypes from './actionTypes';
import axios from 'axios';

const URL_SERVER = process.env.REACT_APP_SERVER;
const PORT_SERVER = process.env.REACT_APP_PORT;
const SERVER_URL_API = `http://${URL_SERVER}:${PORT_SERVER}/books`;

export const fetchBooks = () => async dispatch => {
  dispatch({ type: actionTypes.FETCH_BOOKS_START });

  await axios
    .get(SERVER_URL_API)
    .then(res => {
      dispatch({
        type: actionTypes.FETCH_BOOKS_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({ type: actionTypes.FETCH_BOOKS_FAIL, payload: err.message });
    });
};

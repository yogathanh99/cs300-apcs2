import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import authReducer from './authReducer';
import bookReducer from './bookReducer';

export default combineReducers({
  auth: authReducer,
  books: bookReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

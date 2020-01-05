import * as actionTypes from './actionTypes';

//signUp actions
export const signUp = data => async (
  dispatch,
  _,
  { getFirebase, getFirestore },
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  dispatch({ type: actionTypes.AUTH_START });

  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);
    console.log(res);

    const user = firebase.auth().currentUser;
    await user.sendEmailVerification();

    await firestore
      .collection('users')
      .doc(res.user.uid)
      .set({
        name: data.name,
      });
    dispatch({ type: actionTypes.AUTH_SUCCESS });
  } catch (err) {
    dispatch({ type: actionTypes.AUTH_FAIL, payload: err.message });
  }
};

//logOut actions
export const logOut = () => async (dispatch, _, { getFirebase }) => {
  const firebase = getFirebase();
  try {
    await firebase.auth().signOut();
  } catch (err) {
    dispatch({ type: actionTypes.AUTH_FAIL, payload: err.message });
  }
};

//logIn actions
export const logIn = data => async (dispatch, _, { getFirebase }) => {
  const firebase = getFirebase();
  dispatch({ type: actionTypes.AUTH_START });
  try {
    await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
    dispatch({ type: actionTypes.AUTH_SUCCESS });
  } catch (err) {
    dispatch({ type: actionTypes.AUTH_FAIL, payload: err.message });
  }
};

//verifyEmail actions
export const verifyEmail = data => async (dispatch, _, { getFirebase }) => {
  const firebase = getFirebase();
  dispatch({ type: actionTypes.VERIFY_START });
  try {
    const user = firebase.auth().currentUser;
    await user.sendEmailVerification();
    dispatch({ type: actionTypes.VERIFY_SUCCESS });
  } catch (err) {
    dispatch({ type: actionTypes.VERIFY_FAIL, payload: err.message });
  }
};

//cleanUp actions
export const cleanUp = () => ({ type: actionTypes.CLEAN_UP });

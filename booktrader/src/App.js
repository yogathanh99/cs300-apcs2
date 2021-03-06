import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Logout from './pages/LogOut';
import VerifyEmail from './pages/VerifyEmail';
import StorePage from './pages/StorePage';
import Detail from './pages/Detail';
import Profile from './pages/Profile';
import Upload from './pages/Upload';
import Layout from './hoc/Layout';

function App({ loggedIn, emailVerified, photoURL }) {
  if (/facebook.com/.test(photoURL)) emailVerified = true;
  let routes;
  if (loggedIn && !emailVerified) {
    routes = (
      <Switch>
        <Route exact path='/verify-email' component={VerifyEmail} />
        <Route exact path='/logout' component={Logout} />
        <Redirect to='/verify-email' />
      </Switch>
    );
  } else if (loggedIn && emailVerified) {
    routes = (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/store' component={StorePage} />
        <Route exact path='/upload' component={Upload} />
        <Route exact path='/logout' component={Logout} />
        <Route exact path='/profile' component={Profile} />
        <Route path='/detail/:bookID' component={Detail} />
        <Redirect to='/store' />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path='/signup' component={Signup} />
        <Route path='/detail/:bookID' component={Detail} />
        <Route exact path='/store' component={StorePage} />
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Redirect to='/' />
      </Switch>
    );
  }
  return <Layout>{routes}</Layout>;
}

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid,
  emailVerified: firebase.auth.emailVerified,
  photoURL: firebase.auth.photoURL,
});

export default connect(mapStateToProps)(App);

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
import Layout from './hoc/Layout';
// import './App.css';

function App({ loggedIn, emailVerified }) {
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
        <Route exact path='/logout' component={Logout} />
        <Route path='/detail' component={Detail} />
        <Redirect to='/' />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Redirect to='/signup' />
      </Switch>
    );
  }
  return <Layout>{routes}</Layout>;
}

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid,
  emailVerified: firebase.auth.emailVerified,
});

export default connect(mapStateToProps)(App);

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import StorePage from './pages/StorePage';
import Navbar from './components/Navbar';
import './App.css';

const navItem = [
  {
    link: '/store',
    name: 'Store',
  },
  {
    link: '/login',
    name: 'Log in',
  },
  {
    link: '/signup',
    name: 'Sign up',
  },
];

const Wrapper = styled.div`
  height: 80vh;
`;

function App() {
  return (
    <div className='App'>
      <Navbar items={navItem} />
      <Wrapper>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/store' component={StorePage} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route component={ErrorPage} />
        </Switch>
      </Wrapper>
    </div>
  );
}

export default App;

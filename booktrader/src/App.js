import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;

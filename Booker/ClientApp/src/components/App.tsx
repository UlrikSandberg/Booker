import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter as Router} from 'react-router-dom';
import HomePage from '../pages/HomePage';

const App = () => {

  const render = () => {
    return <Router>
      <Switch>
        <Route exact path="/home" component={HomePage}/>
        <Redirect to="/home"/>
      </Switch>
    </Router>
  }

  return render();

}

export default App;

import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter as Router} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CinemaHallsOverviewPage from '../pages/management/cinemaHalls/CinemaHallsOverviewPage';
import CreateCinemaHallsPage from '../pages/management/cinemaHalls/CreateCinemaHallsPage';
import UpdateCinemaHallsPage from "../pages/management/cinemaHalls/UpdateCinemaHallsPage";
import ResourceOverviewPage from '../pages/management/ResourceOverviewPage';

const App = () => {

  const render = () => {
    return <Router>
      <Switch>
        <Route exact path="/management/cinemahalls_overview" component={CinemaHallsOverviewPage}/>
        <Route exact path="/management/cinemahall_update" component={UpdateCinemaHallsPage}/>
        <Route exact path="/management/cinemahall_create" component={CreateCinemaHallsPage}/>
        <Route exact path="/management/overview" component={ResourceOverviewPage}/>
        <Route exact path="/home" component={HomePage}/>
        <Redirect to="/home"/>
      </Switch>
    </Router>
  }

  return render();

}

export default App;

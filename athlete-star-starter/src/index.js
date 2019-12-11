import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Cards } from './Cards';
import { Players } from './Players';
import { NavBar } from './NavBar';
import { CustomArrows } from './CustomArrows';
import { PreviousNextMethods } from './PreviousNextMethods';
import { UniversityPage } from './UniversityPage';
import { PlayerProfile } from './PlayerProfile';
import { Reviews } from './Reviews';
import * as serviceWorker from './serviceWorker';

import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

const routing = (
  <Router>
  <div>
    <NavBar />
    <Switch>
        <Route exact path='/' component={App} />
        <Route path='/schools' component={CustomArrows} />
        <Route path='/athletes' component={PreviousNextMethods} />
        <Route path='/university' component={UniversityPage} />
        <Route path='/profile' component={PlayerProfile} />
        <Route path='/review' component={Reviews} />
    </Switch>
  </div>
</Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

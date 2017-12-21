import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../util/history.js'

import Home from '../home/HomePage.js'
import Projects from '../projects/ProjectsPage.js'
import Resume from '../resume/ResumePage.js'
import NavBar from '../navigation/NavBar.js'

export default () => (
  <Router history={history}>
    <div>
      <NavBar />
      <div className={'page-host container'}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects/:name?" component={Projects} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </div>
    </div>
  </Router>
)

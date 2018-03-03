import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from './util/history.js'

import Home from './home/HomePage.js'

export default () => (
  <Router history={history}>
    <Home />
  </Router>
)

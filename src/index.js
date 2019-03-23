import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.js'
import registerServiceWorker from './registerServiceWorker'
import history from './util/history'

// Bad redirects can send us here with an ugly url
if (window.location && window.location.pathname === '/index.html') {
  history.replace('/')
}

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

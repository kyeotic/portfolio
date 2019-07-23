import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.js'
import * as serviceWorker from './serviceWorker'
import { navigate } from 'raviger'

// Bad redirects can send us here with an ugly url
if (window.location && window.location.pathname === '/index.html') {
  navigate('/', true)
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

import React from 'react';
import { render } from 'react-dom';
import Root from 'routes/root';
import createBrowserHistory from 'history/lib/createBrowserHistory';


const history = createBrowserHistory();

const appRoot = document.getElementById('app-host');
render(<Root history={history} />, appRoot);
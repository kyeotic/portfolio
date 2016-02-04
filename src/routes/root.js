import React, { Component, PropTypes } from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import App from 'routes/app'
import Home from 'routes/home'
import Projects from 'routes/projects'
import Resume from 'resume/resume'

export default class Root extends Component {
	static propTypes = {
		history: PropTypes.object
	}
	render() {
		const { store, history } = this.props

		return (
			<Router history={history}>
				<Route path={'/'} component={App}>
					<IndexRoute component={Home} />
					<Route path={'projects'} component={Projects} />
					<Route path={'projects/:name'} component={Projects} />
					<Route path={'resume'} component={Resume} />
				</Route>
			</Router>
		)
	}
}
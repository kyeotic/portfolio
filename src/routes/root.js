import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from 'routes/app';
import Home from 'routes/home';
import Projects from 'routes/projects';
import projects from 'projects/route-manifest';
import Resume from 'resume/resume'

export default class Root extends Component {
	static propTypes = {
		history: PropTypes.object
	}
	render() {
		const { store, history } = this.props;

		let projectsRoutes = projects.map(p => <Route path={p.route} component={p.component} key={p.route} />);

		return (
			<Router history={history}>
				<Route path={'/'} component={App}>
					<IndexRoute component={Home} />
					<Route path={'/projects'} component={Projects}>
						<IndexRoute component={projects[0].component} />
						{projectsRoutes}
					</Route>
					<Route path={'/resume'} component={Resume} />
				</Route>
			</Router>
		);
	}
}
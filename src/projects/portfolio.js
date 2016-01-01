import React, { Component } from 'react';
import Project from 'components/project';
import GalleryImage from 'components/galleryImage';

export default class Portfolio extends Component {
	render() {
		return (
			<Project>
				<div className={'row'}>
					<div className={'col-md-8'}>
						<h2>Portfolio</h2>
						<p>
							This portfolio represents my ideal tinkering stack. The application itself is built with <a href="http://durandaljs.com/">Durandal</a>, a fairly new MV* Javascript framework that builds on top of Knockout, RequireJS, and jQuery. Having originally come from WPF on the desktop, I am very comfortable thinking about applications in Knockout's MVVM pattern; and Durandal was developed by the same man who created <a href="https://caliburnmicro.codeplex.com/">Caliburn.Micro</a>, so it fits in very well.
						</p>

						<p>
							The server is a very basic NodeJS/Express server. It's only responsibility is to serve the <code>index.html</code> that Durandal run's inside of, but do so for every route so that push-state is supported. The server is running on a self-managed <a href="https://www.webfaction.com/">Webfaction</a> box. Deployments are handled by pushing over SSH to a Git server running on the same box, where a post-receive hook unpacks the repository, run's Grunt to run tests and build the app, and restart <a href="https://npmjs.org/package/forever">Forever</a>. A cron-job checks every 15 minutes to ensure it's still up.
						</p>

						<p>
							Javascript client, stateless server, deploy with Git, built with Grunt. I love it. If you want to check out the source it's on <a href="https://github.com/tyrsius/portfolio">Github</a>.
						</p>
					</div>
					<div className={'col-md-4'}>
						<GalleryImage src="/assets/images/portfolio_deploy.jpg" alt="Git deploy: push to the host which unpacks the repo, runs grunt, and starts Forever." />
					</div>
				</div>
			</Project>
		);
	}
}
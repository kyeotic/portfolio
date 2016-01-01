import React, { Component } from 'react';
import Project from 'components/project';
import GalleryImage from 'components/galleryImage';
import {title} from 'util/title';

@title('Portfolio')
export default class Portfolio extends Component {
	render() {
		return (
			<Project>
				<div className={'row'}>
					<div className={'col-md-8'}>
						<h2>Portfolio</h2>
						<p>
							This portfolio, now in its second version, is my ideal tinkering stack. Originally it was a simple <a href="http://durandaljs.com/">Durandal</a> application built with Grunt ssh deployed to a self-managed <a href="https://www.webfaction.com/">Webfaction</a> box with Git. While I loved Durandal, and Knockout (which it was built on), it didn't fare too well with the public and has now been abandonded. The current version of this portfolio is built with <a href="https://facebook.github.io/react/">React</a>, which has quickly become my new favorite Javascript front-end. Instead of Grunt I am now <a href="http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/">building with plain-old-npm</a> and using <a href="http://jspm.io/">jspm</a> and <a href="https://babeljs.io/">Babel</a> to develop with ES6/7 and package the application. If this application was larger I would also be using <a href="http://redux.js.org/">Redux</a> to provide the <strong>M</strong> to React's <strong>V</strong> for <strong>MV*</strong>.
						</p>

						<p>
							Javascript client, stateless server, deploy with Git. I love it. If you want to check out the source it's on <a href="https://github.com/tyrsius/portfolio">Github</a>.
						</p>
					</div>
					<div className={'col-md-4'}>
						<GalleryImage src="/assets/images/portfolio_deploy.jpg" alt="Git deploy: push to the host which unpacks the repo, runs grunt (from the Durandal version), and starts Forever." />
					</div>
				</div>
			</Project>
		);
	}
}
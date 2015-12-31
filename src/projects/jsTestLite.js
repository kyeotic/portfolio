import React, { Component } from 'react';
import Project from 'components/project';
import GalleryImage from 'components/galleryImage';

export default class JsTestLite extends Component {
	render() {
		return (
			<div className={"row"}>
				<div className={"col-md-8"}>
					<h2>JS Test Lite</h2>

					<p>
						<a href="http://tyrsius.github.io/jsTestLite/">JSTestLite</a> is a little tool I made after a frustrating day spent trying to work out some complex logic on a new project. Sometimes you just need to write some quick tests, without the grunt work of setting up your whole project.
					</p>
					
					<p> 
						JsTestLite is basically <a href="http://jsfiddle.net/" target="_blank">jsFiddle</a> for <a href="http://pivotal.github.io/jasmine/" target="_blank">Jasmine</a> unit tests. Write some code, write some tests, check the results. The tests are re-run on keyup in either field (with a debounce of 500ms for performance), and hosted inside of a freshly created iframe to ensure each environment is fresh and unpolluted by previous runs. The input fields use Ace Editor, and a few buttons let you easily resize everything. If you are using a supporting browser, your code is automatically kept in localStorage for you.
					</p>

					<p>
						It's a small tool, but it was fun to make. Sometimes the smallest tools are the most useful.
					</p>
				</div>

				<div className={"col-md-4"}>
					<Project>
						<GalleryImage src="/assets/images/jstest.png" alt="Write and run tests instantly" />
					</Project>					
				</div>
			</div>
		);
	}
}
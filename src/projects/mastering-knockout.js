import React, { Component } from 'react';
import Project from 'components/project';
import GalleryImage from 'components/galleryImage';

export default class MasteringKnockout extends Component {
	render() {
		return (
			<Project>
				<div className={'row'}>
					<div className={'col-md-8'}>
						<h2>Mastering KnockoutJS</h2>

						<p>A thorough look <a href="http://knockoutjs.com/index.html">Knockout</a> intended for intermediate-to-advanced JavaScript developers. <a href="https://www.packtpub.com/web-development/mastering-knockoutjs">Mastering KnockoutJS</a> is full of runnable code samples and includes everything from how to use the basic features to writing your own binding providers. It also looks at how to develop organize large applications, with both standard Knockout and the Knockout-based framework <a href="http://durandaljs.com/">Durandal</a>.</p>
					</div>

					<div className={'col-md-4'}>
						<a href="https://www.packtpub.com/web-development/mastering-knockoutjs" target="_blank">
							<GalleryImage src="/assets/images/mastering_knockout_cover.jpg" alt="Mastering Knockout" />
						</a>
					</div>
				</div>
			</Project>
		);
	}
}
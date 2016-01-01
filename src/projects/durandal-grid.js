import React, { Component } from 'react';
import Project from 'components/project';
import GalleryImage from 'components/galleryImage';
import {title} from 'util/title';

@title('Durandal Grid')
export default class DurandalGrid extends Component {
	render() {
		return (
			<Project>
				<div className={'row'}>
					<div className={'col-md-8'}>
						<h2>Durandal Grid</h2>
						<p>
							Ko-Grid is the de facto plugin for Knockout if you want to create a databound table, but like SlickGrid it forces you to write HTML-in-string inside your Javascript if you want to customize your rows. Durandal has a much cleaner native way to do such customization via it's data-part overrides in Widgets, which is what I used to create Durandal Grid. It supports asc/desc sorting on properties using the standard <code>sort()</code>, or you can specify your own sort method for each column. It has a standard paging button footer, as well as page size buttons. Finally, it provides easy-to-change row templates so that you can add functionality, or use custom contents.
						</p>
					</div>
					<div className={'col-md-4'}>
						<GalleryImage src="/assets/images/durandal-grid-basic.png" alt="The standard grid styling, with paging buttons." />
					</div>
				</div>
				<div className={'row'}>
					<div className={'col-md-8'}>
						<p>
							If you are interested in more details, I've made a dedicated docs/example page for it on Github Pages. You can <a href="http://tyrsius.github.io/durandal-grid/">check it out here</a>, or you can just <a href="https://github.com/tyrsius/durandal-grid">check out the source</a>.
						</p>
					</div>
					<div className={'col-md-4'}>
						<GalleryImage src="/assets/images/durandal-grid-custom.png" alt="Customized rows, with buttons bound to the host viewmodel." />
					</div>
				</div>
			</Project>
		);
	}
}
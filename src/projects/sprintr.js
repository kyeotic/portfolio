import React, { Component } from 'react';
import Project from 'components/project';
import GalleryImage from 'components/galleryImage';
import {title} from 'util/title';

@title('Sprintr')
export default class Sprintr extends Component {
	render() {
		return (
			<Project>				
				<div className={'row'}>
					<div className={'col-md-8'}>
						<h2>Sprintr</h2>
						<p>
							Sprintr was a little tool I developed after our team got tired of dealing with the sprint work item entry interface in TFS 2010. We wanted something that allowed us to get all of our stories and tasks planned out quickly, while offering a good summary of the work we were about to commit to. I had just discovered the <a href="https://www.meteor.com/" target="_blank">Meteor</a> framework, and I was eager to build something with it. Meteor was a good fit because it offered data-syncing between clients for free in real-time, which allowed multiple team members to work at the same time during planning sessions. In addition to using Meteor, this was also the first real application I built using Coffeescript.
						</p>
					</div>
					<div className={'col-md-4'}>
						<GalleryImage src="/assets/images/sprintr_collapse.jpg" alt="Sprint with stories collapsed" />
					</div>
				</div>
				<div className={'row'}>
					<div className={'col-md-8'}>
						<p>
							Sprintr has a clean, simple interface. You can enter stories and tasks, and drag-n-drop to reorder them. You can collapse the tasks under stories to get a better look at the whole sprint. An overview on the left keeps track of the points in Strech/Committed, and shows the navigation hotkeys. An email-ready summary at the bottom keeps the whole sprint in plain-text.
						</p>

						<p>
							We used the tool for several sprints before our organization upgraded to TFS 2012, which solved a lot of the same problems that Sprintr solved for us, without the additional export step back into TFS at the end. The source code is hosted on <a href="https://github.com/tyrsius/sprintr" target="_blank">Github</a>, and a live demo can be seen <a href="http://sprintr.herokuapp.com/#9d4a33b5-7fae-42f9-9f23-e6efec4cf747" target="_bank">here on Heroku</a>. The source for this is available because I developed this tool on my own time.
						</p>
					</div>
					<div className={'col-md-4'}>
						<GalleryImage src="/assets/images/sprintr_expand.jpg" alt="Sprint with stories expanded" />
					</div>
				</div>
			</Project>
		);
	}
}
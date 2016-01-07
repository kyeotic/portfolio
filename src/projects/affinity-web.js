import React, { Component } from 'react';
import Project from 'components/project';
import GalleryImage from 'components/galleryImage';
import {title} from 'util/title';

@title('Affinity Web')
export default class AffinityWeb extends Component {
	render() {
		return (
			<Project>
				<div className={'row'}>
					<div className={'col-md-8'}>
						<h2>Affinity Web</h2>

						<p>
							The web version of Affinity was a limited scope MVC3 application designed to allow the company's nationwide field technicians to update their work orders on site. Previously they were required to call in to customer support to do so. I had never done web development before starting this project, but my managers were happy to let me learn as I went. I still consider it one of my best accomplishments that the initial version of the application that allowed the techs to create tickets and add notes was live in only six weeks.
						</p>
					</div>

					<div className={'col-md-4'}>
						<GalleryImage src="/images/web_home.jpg" alt="The Technicians homepage" />
					</div>
				</div>
				<div className={'row'}>
					<div className={'col-md-8'}>
						<p>
							The application made use of MVC3 for initial server-side rendering, and jQuery for DOM manipulation and ajax requests. I used tinySort for filtering and ordering ticktet lists and queries, and jqTree for async lazy-loading of what would otherwise be the 10k node category list. The application was very lightweight overall, and had an average page-load time of less than a second. Even on mobile phones, the application was very responsive.
						</p>
						<p>
							After the initial release, the web application was expanded to give reporting capabilities to our clients. It allowed them to look at an organized view of the open tickets, allowed for multiple format exporting, and gave client admins the abiity to escalate the priority of tickets that had been dispatched to technicians. Unfortunately the parts ordering functionality was not completed before I left the project.
						</p>
					</div>
					<div className={'col-md-4'}>
						<GalleryImage src="/images/web_ticket.jpg" alt="The ticket inteface" />
						<GalleryImage src="/images/web_rtm.jpg" alt="The customer reporting tool" />
					</div>
				</div>
			</Project>
		);
	}
}
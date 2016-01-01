import React, { Component } from 'react';
import Project from 'components/project';
import GalleryImage from 'components/galleryImage';

export default class Swc extends Component {
	render() {
		return (
			<Project>
				<div className={'row'}>
					<div className={'col-md-8'}>
						<h2>ShiftWise Connect</h2>

						<p>
							ShiftWise Connect was the nurse portal for the jobs created in ESP, ShiftWise's primary product. It was ShiftWise's first Service Oriented application (the server did not handle any HTML rendering). SWC ended up being the proving ground for new architecture at ShiftWise, including the use of NServiceBus to create resilient application state changes, the division of code into independently deployable "sub-systems", new unit and automation test frameworks, and new deployment tools. While working on SWC I also lead the adoption of Knockout, which replaced the deprecated jQuery templates for client side UI rendering.
						</p>
					</div>
					<div className={'col-md-4'}>
						<GalleryImage src="/assets/images/swc_grid.jpg" alt="The jobs grid" />
					</div>
				</div>

				<div className={'row'}>
					<div className={'col-md-8'}>
						<p>
							The first major re-architecture in SWC was the move from standard web-service calls that directly changed the database, to web service calls that created MSMQ messages handled by NServiceBus. Because ESP and SWC used independent datastores, there was initially a problem with occasional loss of requests between the two. NServiceBus's retry mechanism ensured that work would not get lost in these cases. After a test run with the job creation process was successful, most database-changing operations were ported to NServiceBus for its resiliency.
						</p>
						<p>
							The second major re-architecture in SWC was the move to sub-systems. The goal here was to create a system with pieces that could be taken offline and deployed without interrupting the entire system; this goal was made possible because MSMQ monitors could be turned off without interfering with the ability to messages to continue to be sent to MSMQ queues. Our team worked on the original prototype for this model, which seperated the job-nurse matching logic into its own system.
						</p>
					</div>
					<div className={'col-md-4'}>
						<GalleryImage src="/assets/images/swc_user.jpg" alt="The user options page"/>
					</div>
				</div>

				<div className={'row'}>
					<div className={'col-md-8'}>
						<p>
							The last major work our team did on SWC before moving onto the next project was support for mobile browsers. While we investigated a responsive layout solution, we went with seperate pages for mobile due to time contraints.
						</p>
					</div>
					<div className={'col-md-4'}>
						<GalleryImage src="/assets/images/swc_mobile.jpg" alt="The job details page for mobile browsers"/>
					</div>
				</div>
			</Project>
		);
	}
}
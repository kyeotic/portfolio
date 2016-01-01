import React, { Component } from 'react';
import Project from 'components/project';
import GalleryImage from 'components/galleryImage';
import {title} from 'util/title';

@title('MightyNurse')
export default class MightyNurse extends Component {
	render() {
		return (
			<Project>
				<div className={'row'}>
					<div className={'col-md-8'}>
						<h2>MightyNurse/ShiftWise Connect</h2>

						<p>
							Originally this product was called MightyNurse, but shortly after release it was rebranded to ShiftWise Connect. The application allowed nurses to directly apply to jobs in side the Shiftwise ESP system. Previously, only users at the hospitals and staffing agencies (working on behalf of the nurses) were able to do this. The system had  web interface, text message and email integration (including the ability to apply via SMS response codes), and eventually a mobile phone interface and native application. I started working with the company during beta development of the product, and continued with it though most major feature development. It was our first service oriented front end architecture (SOFEA). This model was so successful, it was used for all future web application development. Initially jQuery templates were used for client-side rendering, but this was eventually replaced with KnockoutJS. I was the primary advocate and trainer for Knockout.
						</p>
					</div>

					<div className={'col-md-4'}>
						<GalleryImage src="/assets/images/affinity_ticket.jpg" alt="The Ticket Inteface" />
					</div>
				</div>
				<div className={'row'}>
					<div className={'col-md-8'}>
						<p>
							
						</p>
					</div>a
					<div className={'col-md-4'}>
						<GalleryImage src="/assets/images/affinity_category.jpg" alt="The Ticket Inteface" />
					</div>
				</div>
				<div className={'row'}>
					<div className={'col-md-8'}>
					<p>
						
					</p>
					</div>
					<div className={'col-md-4'}>
						<GalleryImage src="/assets/images/affinity_parts.jpg" alt="The Ticket Inteface" />
					</div>
				</div>
			</Project>
		);
	}
}
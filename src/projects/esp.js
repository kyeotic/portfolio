import React, { Component } from 'react';
import Project from 'components/project';
import GalleryImage from 'components/galleryImage';

export default class Esp extends Component {
	render() {
		return (
			<Project>
				<div className={'row'}>
					<div className={'col-md-8'}>
						<h2>ESP</h2>
						<p>
							I started at ShiftWise when the ESP project was about 8 years old. It was written in ASP.NET, running on top of SQL. It handled the staff matching for hospitals by taking care of the miles of red tape involved with determining whether a given nurse was legally qualified to fill a specific role. It was very well established when I started. The team I was on did minor maintenance and feature development for about a year before we got our first major project. ESP handled the timecards for nurses who worked in the positions it filled, but it had a very basic understanding of "work" in timecards. Our job was to overhaul the billing system to handle more complex line items.
						</p>
					</div>
				</div>
				<div className={'row'}>
					<div className={'col-md-8'}>
						<p>
							The biggest challenge in development came at the beginning of the project. All of the original developers of the system were gone, and very little technical documentation existed for the billing system. It took several weeks of research in the code, coupled with discussions from our support staff, before we were able to even start development. I learned a lot during this project about working with and understanding legacy code.
						</p>
					</div>
				</div>
				<div className={'row'}>
					<div className={'col-md-8'}>
						<p>
							Since ESP was ShiftWise's primary application, and primary source of revenue, work in the billing system was very sensitive. Not only were we adding a large feature, we were refactoring a large portion as well. We went slowly, leaving plenty of time for heavy regression testing at the end. The project took about 6 months, but it was very well received overall. Our team continued with minor feature development and maintence of ESP after it's release.
						</p>
					</div>
				</div>
			</Project>
		);
	}
}
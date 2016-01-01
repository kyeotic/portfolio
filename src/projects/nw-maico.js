import React, { Component } from 'react';
import Project from 'components/project';
import GalleryImage from 'components/galleryImage';

export default class NwMaico extends Component {
	render() {
		return (
			<Project>
				<div className={'row'}>
					<div className={'col-md-8'}>
						<h2>NW Maico &amp; CZ</h2>
						<p>
							NW Maico &amp; CZ was an online store for a motorcycle parts company. The application was built using KnockoutJS, a popular javascript MV* library that provides data-binding via "observables". I also used SammyJS to give the application single-page hash-navigation. Purchasing was handled with PayPal. Since client-side code was building the cart, product verification was handled serveer-side after an https redirect (which was the only real page "navigation" in the site). The application was planned to have customer account, but it was cut from the first release. PayPal provided enough informationt to complete the order, so the application only stored the inventory and the completed transactions.
						</p>
					</div>
					<div className={'col-md-4'}>
						<GalleryImage src="/assets/images/nw_home.jpg" alt="The home page" />
					</div>
				</div>
				<div className={'row'}>
					<div className={'col-md-8'}>
						<p>
							The application was developed as part of a planned deal that fell through. Unfortunately, this meant that the application was never deployed to production, though it did go through beta testing.
						</p>
					</div>
					<div className={'col-md-4'}>
						<GalleryImage src="/assets/images/nw_parts.jpg" alt="One of the parts categories" />
					</div>
				</div>
			</Project>
		);
	}
}
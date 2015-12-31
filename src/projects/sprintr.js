import React, { Component } from 'react';
import GalleryContainer from 'components/galleryContainer';
import GalleryImage from 'components/galleryImage';

export default class JsTestLite extends Component {
	render() {
		return (
			<div className={"row"}>
				<div className={"col-md-8"}>
				</div>

				<div className={"col-md-4"}>
					<GalleryContainer>
						<GalleryImage src="/assets/images/jstest.png" alt="Write and run tests instantly" />
					</GalleryContainer>					
				</div>
			</div>
		);
	}
}
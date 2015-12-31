import React, { Component, Children } from 'react';
import {lightboxService} from 'components/Lightbox';

function getImages(element) {
	let images = [];
	if (!element.props)
		return images;
	if (element.props.children)
		images = images.concat(...Children.toArray(element.props.children).map(getImages));
	if (element.type === 'img')
		images.push({
			alt: element.props.alt,
			src: element.props.src
		});
	return images;
}


export default class Project extends Component {
	images = []
	componentWillMount() {
		this.images = [].concat([], ...Children.toArray(this.props.children).map(getImages));
		console.log(this.images);
	}
	handleClick = (e) => {
		lightboxService.show(this.images.slice(0)
										.sort(image => image.src === e.target.src ? -1 : 1));
	}
	render() {
		return (
			<div onClick={this.handleClick}>
				{this.props.children}
			</div>
		);
	}
}
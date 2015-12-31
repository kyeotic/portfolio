import React, { Component } from 'react';
import {Modal, Carousel, CarouselItem} from 'react-bootstrap';

export const lightboxService = {
	handlers: new Set(),
	registerCallback(handler) {
		this.handlers.add(handler);
	},
	removeCallback(handler) {
		this.handlers.delete(handler);
	},
	show(images) {
		this.handlers.forEach(h => h({images: images, isShowing: true}));
	},
	close() {
		this.handlers.forEach(h => h({images: [], isShowing: false}));
	}
};

export default class Lightbox extends Component {
	constructor(props, ...args) {
		super(props, ...args);
		this.state = { images: [], isShowing: false };
	}
	componentDidMount() {
		lightboxService.registerCallback(this.update);
	}
	componentWillUnmount() {
		lightboxService.removeCallback(this.update);
	}
	update = (newState) => {
		this.setState(newState);
	}
	render() {
		const { images, isShowing } = this.state;

		let close = () => lightboxService.close();

		return (
			<Modal show={isShowing} onHide={close}>
				<Carousel>
					{images.map(image => {
						return (<CarouselItem key={image.src}>
									<img src={image.src} alt={image.alt} width={900} height={500} />
									<div className="carousel-caption">
										<h4>{image.alt}</h4>
									</div>
							   </CarouselItem>);
					})}
				</Carousel>
			</Modal>
		);
	}
}
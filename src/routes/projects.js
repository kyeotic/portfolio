import React, { Component } from 'react';
import ProjectList from 'components/projectList';
import Lightbox from 'components/Lightbox';

export default class Projects extends Component {
	render() {
		return (
			<div className={"row"}>
				<div className={"col-sm-2"}>
					<ProjectList />
				</div>				

			    <div id="projectsContainer" className={"col-sm-10"}>
			    	{this.props.children}
			    </div>

			    <Lightbox />
			</div>
		);
	}
}
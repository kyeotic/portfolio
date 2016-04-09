import React, { Component } from 'react'
import ProjectList from 'components/projectList'
import Project from 'components/project';
import Lightbox from 'components/lightbox'
import manifest from 'projects/manifest'
import ReactMarkdown from 'react-markdown'
import GalleryImage from 'components/galleryImage';
import title from 'util/title'

export default class Projects extends Component {
	constructor(props, ...args) {
		super(props, ...args)
		this.state = { project: this.getProject(props.params)}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({project: this.getProject(nextProps.params)})
	}

	getProject = (params) => {
		let project = !params.name ? manifest.projects[0] : manifest.projects.find(p => p.route === params.name)
		title.set(project.title)
		return project
	}

	render() {
		let project = this.state.project
		return (
			<div className={"row"}>
				<div className={"col-sm-2"}>
					<ProjectList projects={manifest.projects} />
				</div>

			    <div id="projectsContainer" className={"col-sm-10"}>
		    		<Project id={project.route}>
						<div className={'row'}>
							<div className={'col-md-8'}>
								<ReactMarkdown id={project.route + '-markdown'} escapeHtml source={project.content} />
							</div>
							<div className={'col-md-4'}>
								{project.images ? project.images.map(image => {
									return <GalleryImage src={'/images/' + image.src} key={image.src} alt={image.title} />
								}) : null}
							</div>
						</div>
					</Project>
			    </div>

			    <Lightbox />
			</div>
		)
	}
}

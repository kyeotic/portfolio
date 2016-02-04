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

/*
{
			route: 'jsTestLite',
			title: 'JS Test Lite',
			type: 'personal',
			images: [
				{ src: 'jstest.png', title: 'Write and run tests instantly'}
			],
			content: `#JS Test Lite
<a href="http://tyrsius.github.io/jsTestLite/">JSTestLite</a> is a little tool I made after a frustrating day spent trying to work out some complex logic on a new project. Sometimes you just need to write some quick tests, without the grunt work of setting up your whole project.

JsTestLite is basically <a href="http://jsfiddle.net/" target="_blank">jsFiddle</a> for <a href="http://pivotal.github.io/jasmine/" target="_blank">Jasmine</a> unit tests. Write some code, write some tests, check the results. The tests are re-run on keyup in either field (with a debounce of 500ms for performance), and hosted inside of a freshly created iframe to ensure each environment is fresh and unpolluted by previous runs. The input fields use Ace Editor, and a few buttons let you easily resize everything. If you are using a supporting browser, your code is automatically kept in localStorage for you.

It's a small tool, but it was fun to make. Sometimes the smallest tools are the most useful.
			`
		},

		*/
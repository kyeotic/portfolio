import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

export default class App extends Component {
	render() {
		return (
			<div>
			    <header className={"nav navbar navbar-default navbar-fixed-top"}>
			        <div className={"container"}>
			            <nav>
			            	<IndexLink className={"brand navbar-brand"} to="/">
			            		<i className={"icon-home"}></i>
			            	</IndexLink>
			                <ul className={"nav navbar-nav"} >
			                	<li><Link to={'/projects'}>{'Portfolio'}</Link></li>
			                </ul>
			            </nav>
			        </div>
			    </header>
			    
			    <div className={"page-host container"}>
			        {this.props.children}
			    </div>
			</div>
		);
	}
}
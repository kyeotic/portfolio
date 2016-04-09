import React, { Component } from 'react';
import {title} from 'util/title';

@title('Resume')
export default class Resume extends Component {
	render() {
		return (
			<div>
				<section>
					<h1>Timothy Kye</h1>
					<address>
						Portland, OR<br/>
						<a href="mailto: tim@kye.plus">tim@kye.plus</a>
					</address>
				</section>	
				<section>
					<h3 className={'page-header'}>Software &amp; Technologies</h3>
					<div className={'row'}>
						<div className={'col-md-2 col-sm-6'}>
							<h4>Languages</h4>
							<ul>
								<li>C#/.NET</li>
								<li>Javascript/Coffeescript</li>
								<li>SQL (MS)</li>
								<li>HTML</li>
								<li>Regular Expressions</li>
							</ul>
						</div>
						<div className={'col-md-2 col-sm-6'}>
							<h4>Frameworks</h4>
							<ul>
								<li>ASP.NET MVC</li>
								<li>NodeJS</li>
								<li>ServiceStack</li>
								<li>WCF</li>
								<li>DurandalJS</li>
								<li>AngularJS</li>
								<li>Twitter Bootstrap</li>
							</ul>
						</div>
						<div className={'col-md-2 col-sm-6'}>
							<h4>Libraries</h4>
							<ul>
								<li>jQuery</li>
								<li>Knockout</li>
								<li>Jasmine</li>
								<li>Q</li>
								<li>RequireJS</li>
								<li>Socket.IO</li>
								<li>MSMQ (MassTransit/NServiceBus)</li>
							</ul>
						</div>
						<div className={'col-md-2 col-sm-6'}>
							<h4>Other Tools</h4>
							<ul>
								<li>Visual Studio+TFS 2010/2012</li>
								<li>SQL Server Mgt Studio 2008</li>
								<li>Sublime Text</li>
								<li>Git</li>
								<li>Grunt</li>
								<li>Chocolatey/Boxstarter</li>
								<li>AutoHotkey</li>
							</ul>
						</div>
					</div>
				</section>
				<section>
					<h3 className={'page-header'}>Work Experience</h3>

					<h4>VanderHouwen (on contract for Nike) <small>Application Engineer Feb 2016 - Present</small></h4>
					<ul>
						<li>Worked as a full stack JavaScript develoer maintaining AWS-Lambda based "server" and React/Redux frontend</li>
						<li>Assisted dev ops team with developing continuous integration pipeline for AWS Lambda and API Gateway</li>
					</ul>

					<h4>Windsor Solutions <small>Software Developer Dec 2014-Feb 2016</small></h4>
					<ul>
						<li>Worked as a full stack developer with a small team (4 devs), independently from other Windsor teams</li>
						<li>Developed TREADS project for Montana DEQ - workflow tracking for various government departments and 3rd party contractors.</li>
						<li>Helped extend existing Angular and PetaPoco tools.</li>
						<li>Contributed to initial JavaScript testing adoption, including build integration.</li>
					</ul>

					<h4>ShiftWise <small>Software Developer Mar 2012-Dec 2014 [Purchased by AMN Healthcare 2014]</small></h4>
					<ul>
						<li>Worked with a small team (4-6) alongside 4 other teams.</li>
						<li>Maintained the company’s primary ASP Web Forms software product with bug fixes and small features. This product handled staffing and billing between hospitals and staffing agencies.</li>
						<li>Developed new Service-Oriented products using WCF, and later ServiceStack.</li>
						<li>Created and ran Javascript training for all teams that covered advanced use and application design patterns. </li>
						<li>Worked on several greenfield product prototypes to evaluate new tools and patterns, including Xamarin (Android), Neo4j, ServiceStack, and message-based architectures.</li>
						<li>Introduced new technologies to the teams for consideration of adoption. Successfully led adoption of Knockout and Durandal.</li>
					</ul>

					<h4>Retail Imaging Management Group <small>Software Developer 2010-2012</small></h4>
					<ul>
						<li>Worked as the sole developer.</li>
						<li>Responsible for development and maintenance of in-house ticket management system using C#/.NET. 
				The software manages troubleshooting tickets for nationwide photo lab support, on-site technician dispatching, warehouse inventory, and bench repair.
				</li>
						<li>Learned new web development framework and delivered web counterpart to in-house ticket management software using ASP.NET MVC3 in six-week timeframe. Application is used nationwide by field support team via desktop and mobile browsers.</li>
						<li>Lead development of ecommerce site nwmaicocz.com, including application and database design, as well as PayPal payment integration.</li>
						<li>Assisted database administrator in maintaining existing ticket database, as well as designing a new database for inventory and parts ordering.</li>
						<li>Developed technical documentation for completed tools and conducted training for new tools and processes with internal users.</li>
					</ul>
				</section>
				<section>
					<h3 className={'page-header'}>Publications</h3>
					<ul>
						<li><a href="https://www.packtpub.com/web-development/mastering-knockoutjs"><em>Mastering KnockoutJS</em></a>, published 2014 by Packt Publishing.</li>
					</ul>
				</section>

				<section>
					<h3>Download</h3>
					<p>
						If you would like a <em>.doc</em> version of my resume, you can <a href="https://docs.google.com/document/d/1K49aXhaiqZ_XrxaWGK8gMc7o8LiJU6VldzdOM8mEGuI/edit?usp=sharing">view one here</a>.
					</p>
				</section>
			</div>
		);
	}
}



// <!-- google docs download link
// https://docs.google.com/uc?authuser=0&id=0B0FlLOQHc0TZNWZmMzc1MWEtMjYyZS00NWI0LTk1MGYtNjgwZGQzNGJlODNk&export=download
// -->

// <!--
// <div className={'row'}>
// 	<div className={'col-md-8 col-md-offset-2'}>
// 		<iframe className={'scribd_iframe_embed'} src="//www.scribd.com/embeds/199426177/content?start_page=1&view_mode=scroll&show_recommendations=true" data-auto-height="false" data-aspect-ratio="undefined" scrolling="no" id="doc_58277" width="100%" height="600" frameborder="0"></iframe>
// 	</div>
// </div>
// -->
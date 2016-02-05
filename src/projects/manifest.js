 import JsTestLite from 'projects/jsTestLite.md!text';
import Swc from 'projects/swc.md!text'
import AffinityWeb from 'projects/affinity-web.md!text'
import Affinity from 'projects/affinity.md!text'
import ChaosCrusade from 'projects/chaos-crusade.md!text';
import DurandalGrid from 'projects/durandal-grid.md!text'
import Esp from 'projects/esp.md!text'
import MasteringKnockout from 'projects/mastering-knockout.md!text'
import NwMaico from 'projects/nw-maico.md!text'
import Portfolio from 'projects/portfolio.md!text'
import Sprintr from 'projects/sprintr.md!text'


const manifest = {
	projects: [

		//Personal
		//
		{
			route: 'jsTestLite',
			title: 'JS Test Lite',
			type: 'personal',
			images: [
				{ src: 'jstest.png', title: 'Write and run tests instantly'}
			],
			content: JsTestLite
		},
		{
			route: 'chaos-crusade', 
			title: 'Chaos Crusade',
			type: 'personal',
			images: [
				{ src: 'chaos_char.jpg', title: 'The character screen, adding a skill'},
				{ src: 'chaos_skill.jpg', title: 'The skill entry interface.'}
			],
			content: ChaosCrusade
		},
		{
			route: 'durandal-grid', 
			title: 'Durandal Grid',
			type: 'personal',
			images: [
				{ src: 'durandal-grid-basic.png', title: 'The standard grid styling, with paging buttons.'},
				{ src: 'durandal-grid-custom.png', title: 'Customized rows, with buttons bound to the host viewmodel.'}
			],
			content: DurandalGrid
		},
		{
			route: 'portfolio', 
			title: 'Portfolio',
			type: 'personal',
			images: [
				{ src: 'portfolio_deploy.jpg', title: 'Git deploy: push to the host which unpacks the repo, runs npm build, and starts Forever.'}
			],
			content: Portfolio
		},
		{
			route: 'sprintr', 
			title: 'Sprintr',
			type: 'personal',
			images: [
				{ src: 'sprintr_collapse.jpg', title: 'Sprint with stories collapsed'},
				{ src: 'sprintr_expand.jpg', title: 'Sprint with stories expanded'}
			],
			content: Sprintr
		},

		//Professional
		//
		{
			route: 'swc', 
			title: 'ShiftWise Connect',
			type: 'professional',
			images: [
				{ src: 'swc_grid.jpg', title: 'The jobs grid' },
				{ src: 'swc_user.jpg', title: 'The user options page' },
				{ src: 'swc_mobile.jpg', title: 'The job details page for mobile browsers' }
			],
			content: Swc
		},
		{
			route: 'esp', 
			title: 'Esp',
			type: 'professional',
			images: [
				{ src: '', title: ''},
			],
			content: Esp
		},
		{
			route: 'nw-maico', 
			title: 'NwMaico',
			type: 'professional',
			images: [
				{ src: 'nw_home.jpg', title: 'he home page'},
				{ src: 'nw_parts.jpg', title: 'One of the parts categories'}
			],
			content: NwMaico
		},
		{
			route: 'affinity-web', 
			title: 'Affinity Web',
			type: 'professional',
			images: [
				{ src: 'web_home.jpg', title: 'The Technicians homepage'},
				{ src: 'web_ticket.jpg', title: 'he ticket inteface'},
				{ src: 'web_rtm.jpg', title: 'The customer reporting tool'}
			],
			content: AffinityWeb
		},
		{
			route: 'affinity', 
			title: 'Affinity',
			type: 'professional',
			images: [
				{ src: 'affinity_ticket.jpg', title: 'The Ticket Inteface'},
				{ src: 'affinity_category.jpg', title: 'The Ticket Inteface'},
				{ src: 'affinity_parts.jpg', title: 'The Parts Inteface'}
			],
			content: Affinity
		},

		//Publications
		//
		{
			route: 'mastering-knockout', 
			title: 'Mastering Knockout',
			type: 'publications',
			images: [
				{ src: 'mastering_knockout_cover.jpg', title: 'Mastering Knockout', href: 'https://www.packtpub.com/web-development/mastering-knockoutjs'},
			],
			content: MasteringKnockout
		},
	]
}

export default manifest
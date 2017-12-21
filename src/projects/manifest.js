/* eslint-disable import/no-webpack-loader-syntax */
const CoralCommons = require('!html-loader!markdown-loader!./markdown/coral-commons.md')
const JsTestLite = require('!html-loader!markdown-loader!./markdown/jsTestLite.md')
const Swc = require('!html-loader!markdown-loader!./markdown/swc.md')
const AffinityWeb = require('!html-loader!markdown-loader!./markdown/affinity-web.md')
const Affinity = require('!html-loader!markdown-loader!./markdown/affinity.md')
const ChaosCrusade = require('!html-loader!markdown-loader!./markdown/chaos-crusade.md')
const DurandalGrid = require('!html-loader!markdown-loader!./markdown/durandal-grid.md')
const Esp = require('!html-loader!markdown-loader!./markdown/esp.md')
const MasteringKnockout = require('!html-loader!markdown-loader!./markdown/mastering-knockout.md')
const NwMaico = require('!html-loader!markdown-loader!./markdown/nw-maico.md')
const Portfolio = require('!html-loader!markdown-loader!./markdown/portfolio.md')
const Sprintr = require('!html-loader!markdown-loader!./markdown/sprintr.md')

const manifest = {
  projects: [
    //Personal
    //
    {
      route: 'coral-commons',
      title: 'Coral Commons',
      type: 'personal',
      images: [
        { src: '/images/coral-bulletin.png', title: 'Markdown bulletin board' },
        { src: '/images/coral-resident.png', title: 'Contact info page' }
      ],
      content: CoralCommons
    },
    {
      route: 'jsTestLite',
      title: 'JS Test Lite',
      type: 'personal',
      images: [
        { src: '/images/jstest.png', title: 'Write and run tests instantly' }
      ],
      content: JsTestLite
    },
    {
      route: 'chaos-crusade',
      title: 'Chaos Crusade',
      type: 'personal',
      images: [
        {
          src: '/images/chaos_char.jpg',
          title: 'The character screen, adding a skill'
        },
        { src: '/images/chaos_skill.jpg', title: 'The skill entry interface.' }
      ],
      content: ChaosCrusade
    },
    {
      route: 'durandal-grid',
      title: 'Durandal Grid',
      type: 'personal',
      images: [
        {
          src: '/images/durandal-grid-basic.png',
          title: 'The standard grid styling, with paging buttons.'
        },
        {
          src: '/images/durandal-grid-custom.png',
          title: 'Customized rows, with buttons bound to the host viewmodel.'
        }
      ],
      content: DurandalGrid
    },
    {
      route: 'portfolio',
      title: 'Portfolio',
      type: 'personal',
      images: [],
      content: Portfolio
    },
    {
      route: 'sprintr',
      title: 'Sprintr',
      type: 'personal',
      images: [
        {
          src: '/images/sprintr_collapse.jpg',
          title: 'Sprint with stories collapsed'
        },
        {
          src: '/images/sprintr_expand.jpg',
          title: 'Sprint with stories expanded'
        }
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
        { src: '/images/swc_grid.jpg', title: 'The jobs grid' },
        { src: '/images/swc_user.jpg', title: 'The user options page' },
        {
          src: '/images/swc_mobile.jpg',
          title: 'The job details page for mobile browsers'
        }
      ],
      content: Swc
    },
    {
      route: 'esp',
      title: 'Esp',
      type: 'professional',
      images: [],
      content: Esp
    },
    {
      route: 'nw-maico',
      title: 'NwMaico',
      type: 'professional',
      images: [
        { src: '/images/nw_home.jpg', title: 'he home page' },
        { src: '/images/nw_parts.jpg', title: 'One of the parts categories' }
      ],
      content: NwMaico
    },
    {
      route: 'affinity-web',
      title: 'Affinity Web',
      type: 'professional',
      images: [
        { src: '/images/web_home.jpg', title: 'The Technicians homepage' },
        { src: '/images/web_ticket.jpg', title: 'he ticket inteface' },
        { src: '/images/web_rtm.jpg', title: 'The customer reporting tool' }
      ],
      content: AffinityWeb
    },
    {
      route: 'affinity',
      title: 'Affinity',
      type: 'professional',
      images: [
        { src: '/images/affinity_ticket.jpg', title: 'The Ticket Inteface' },
        { src: '/images/affinity_category.jpg', title: 'The Ticket Inteface' },
        { src: '/images/affinity_parts.jpg', title: 'The Parts Inteface' }
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
        {
          src: '/images/mastering_knockout_cover.jpg',
          title: 'Mastering Knockout',
          href: 'https://www.packtpub.com/web-development/mastering-knockoutjs'
        }
      ],
      content: MasteringKnockout
    }
  ]
}

export default manifest

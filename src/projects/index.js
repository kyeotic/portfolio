import {Router} from 'aurelia-router'

export class Projects {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Projects';
      config.map([
        { route: ['swc', ''],     moduleId: './static', title: 'ShiftWise Connect', nav: true,  view: 'app/projects/swc.html',           type: 'pro' },
        { route: 'esp',           moduleId: './static', title: 'ESP',               nav: true,  view: 'app/projects/esp.html',           type: 'pro' },
        { route: 'nwmaico',       moduleId: './static', title: 'NW Maico & CZ',     nav: true,  view: 'app/projects/nwmaico.html',       type: 'pro' },
        { route: 'affinity-web',  moduleId: './static', title: 'Affinity Web',      nav: true,  view: 'app/projects/affinity-web.html',  type: 'pro' },
        { route: 'affinity',      moduleId: './static', title: 'Affinity',          nav: true,  view: 'app/projects/affinity.html',      type: 'pro' },

        //Personal Projects
        { route: 'jstestlite',    moduleId: './static', title: 'JS Test Lite',      nav: true,  view: 'app/projects/jstestlite.html',    type: 'personal' },
        { route: 'portfolio',     moduleId: './static', title: 'Portfolio',         nav: true,  view: 'app/projects/portfolio.html',     type: 'personal' },
        { route: 'durandal-grid', moduleId: './static', title: 'Durandal Grid',     nav: true,  view: 'app/projects/durandal-grid.html', type: 'personal' },
        { route: 'sprintr',       moduleId: './static', title: 'Sprintr',           nav: true,  view: 'app/projects/sprintr.html',       type: 'personal' },
        { route: 'chaos',         moduleId: './static', title: 'Chaos Crusade',     nav: true,  view: 'app/projects/chaos.html',         type: 'personal' },

        //Publications
        { route: 'mastering-knockout',  moduleId: './static', title: 'Mastering KnockoutJS',  nav: true,  view: 'app/projects/masteringKnockout.html', type: 'publication' }
      ]);
    });
  }

  activate() {
    this.projectGroups = [
    {
        title: 'Personal Projects',
        projects: this.router.navigation.filter(function(route) {
          return route.config.type === 'personal';
        })
      },{
        title: 'Professional Work',
        projects: this.router.navigation.filter(function(route) {
          return route.config.type === 'pro';
        })
      }, {
        title: 'Publications',
        projects: this.router.navigation.filter(function(route) {
          return route.config.type === 'publication';
        })
      }
    ];
  }
}

import {Router} from 'aurelia-router';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.history._hasPushState = true;
    this.router.configure(config => {
      config.title = 'Aurelia';
      config.map([
        { route: ['', 'home'],        moduleId: 'home/index',       title: 'Home',      nav: false },
        { route: 'projects*project',  moduleId: 'projects/index',   title: 'Portfolio', nav: true,  hash: '#projects' },
        { route: 'resume',            moduleId: 'resume/index',     title: 'Resume',    nav: true }
      ]);
      config.mapUnknownRoutes('errors/404');
    });
  }
}

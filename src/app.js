import {Router} from 'aurelia-router';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.history._hasPushState = true;
    this.router.configure(config => {
      config.title = 'Portfolio';
      config.map([
        { route: ['', 'home'],        moduleId: 'home/index',       title: 'Home',      nav: false },
        { route: 'projects',          moduleId: 'projects/index',   title: 'Portfolio', nav: true },
        { route: 'resume',            moduleId: 'resume/index',     title: 'Resume',    nav: true }
      ]);
      config.mapUnknownRoutes('errors/404');
    });
  }
}

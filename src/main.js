import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.levels.debug);

export function configure(aurelia) {
  aurelia.plugins
    .installBindingLanguage()
    .installResources()
    .installRouter()
    .installEventAggregator();

  aurelia.start().then(a => a.setRoot('app/app', document.body));
}

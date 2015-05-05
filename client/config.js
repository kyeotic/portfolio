System.config({
  "baseUrl": "dist",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "lib/*": "lib/*.js",
    "portfolio/*": "lib/*.js"
  },
  "shim": {
    "packages": {
      "Magnific-Popup": {
        "main": "Magnific-Popup",
        "format": "global",
        "deps": "jquery",
        "exports": "$.magnificPopup"
      }
    }
  },
  "bundles": {
    "build": [
      "github:aurelia/logging@0.2.1/system/index",
      "github:aurelia/dependency-injection@0.3.1/system/annotations",
      "github:aurelia/metadata@0.2.4/system/origin",
      "github:aurelia/metadata@0.2.4/system/resource-type",
      "github:aurelia/metadata@0.2.4/system/annotations",
      "github:aurelia/dependency-injection@0.3.1/system/util",
      "github:aurelia/loader@0.3.1/system/index",
      "github:aurelia/templating@0.7.1/system/behavior-instance",
      "github:aurelia/task-queue@0.2.1/system/index",
      "github:aurelia/binding@0.2.2/system/path-observer",
      "github:aurelia/binding@0.2.2/system/composite-observer",
      "github:aurelia/binding@0.2.2/system/expressions/ast",
      "github:aurelia/binding@0.2.2/system/event-manager",
      "github:aurelia/binding@0.2.2/system/array-change-records",
      "github:aurelia/binding@0.2.2/system/dirty-checking",
      "github:aurelia/binding@0.2.2/system/property-observation",
      "github:aurelia/binding@0.2.2/system/value-converter",
      "github:aurelia/binding@0.2.2/system/binding-modes",
      "github:aurelia/binding@0.2.2/system/expressions/lexer",
      "github:aurelia/binding@0.2.2/system/binding-expression",
      "github:aurelia/binding@0.2.2/system/listener-expression",
      "github:aurelia/binding@0.2.2/system/name-expression",
      "github:aurelia/binding@0.2.2/system/call-expression",
      "github:aurelia/templating@0.7.1/system/children",
      "github:aurelia/templating@0.7.1/system/util",
      "github:aurelia/templating@0.7.1/system/content-selector",
      "github:aurelia/path@0.4.0/system/index",
      "github:aurelia/templating@0.7.1/system/resource-registry",
      "github:aurelia/templating@0.7.1/system/view",
      "github:aurelia/templating@0.7.1/system/view-slot",
      "github:aurelia/templating@0.7.1/system/binding-language",
      "github:aurelia/templating@0.7.1/system/view-strategy",
      "github:aurelia/templating@0.7.1/system/template-controller",
      "github:aurelia/templating@0.7.1/system/element-config",
      "github:aurelia/templating@0.7.1/system/composition-engine",
      "github:aurelia/framework@0.7.0/system/plugins",
      "github:aurelia/logging-console@0.2.1/system/index",
      "github:aurelia/logging@0.2.1",
      "github:aurelia/metadata@0.2.4/system/index",
      "github:aurelia/loader@0.3.1",
      "github:aurelia/task-queue@0.2.1",
      "github:aurelia/binding@0.2.2/system/ast",
      "github:aurelia/binding@0.2.2/system/array-observation",
      "github:aurelia/binding@0.2.2/system/expressions/parser",
      "github:aurelia/templating@0.7.1/system/property",
      "github:aurelia/path@0.4.0",
      "github:aurelia/templating@0.7.1/system/view-factory",
      "github:aurelia/logging-console@0.2.1",
      "github:aurelia/metadata@0.2.4",
      "github:aurelia/binding@0.2.2/system/observer-locator",
      "github:aurelia/templating@0.7.1/system/view-compiler",
      "github:aurelia/dependency-injection@0.3.1/system/container",
      "github:aurelia/binding@0.2.2/system/index",
      "github:aurelia/templating@0.7.1/system/view-engine",
      "github:aurelia/dependency-injection@0.3.1/system/index",
      "github:aurelia/binding@0.2.2",
      "github:aurelia/templating@0.7.1/system/custom-element",
      "github:aurelia/dependency-injection@0.3.1",
      "github:aurelia/templating@0.7.1/system/behaviors",
      "github:aurelia/templating@0.7.1/system/resource-coordinator",
      "github:aurelia/templating@0.7.1/system/attached-behavior",
      "github:aurelia/templating@0.7.1/system/index",
      "github:aurelia/templating@0.7.1",
      "github:aurelia/framework@0.7.0/system/aurelia",
      "github:aurelia/framework@0.7.0/system/index",
      "github:aurelia/framework@0.7.0",
      "dist/main"
    ]
  }
});

System.config({
  "map": {
    "Magnific-Popup": "github:dimsemenov/Magnific-Popup@1.0.0",
    "aurelia-bootstrapper": "github:aurelia/bootstrapper@0.8.0",
    "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.2.1",
    "aurelia-framework": "github:aurelia/framework@0.7.0",
    "aurelia-history": "github:aurelia/history@0.2.1",
    "aurelia-history-browser": "github:aurelia/history-browser@0.2.1",
    "aurelia-loader-systemjs": "github:aurelia/loader-systemjs@0.3.2",
    "aurelia-logging-console": "github:aurelia/logging-console@0.2.1",
    "aurelia-router": "github:aurelia/router@0.4.2",
    "aurelia-templating": "github:aurelia/templating@0.7.1",
    "aurelia-templating-binding": "github:aurelia/templating-binding@0.7.2",
    "aurelia-templating-resources": "github:aurelia/templating-resources@0.7.0",
    "aurelia-templating-router": "github:aurelia/templating-router@0.8.0",
    "bootstrap": "github:twbs/bootstrap@3.3.1",
    "font-awesome": "npm:font-awesome@4.2.0",
    "jquery": "github:components/jquery@2.1.3",
    "main": "dist/main",
    "github:aurelia/binding@0.2.2": {
      "aurelia-metadata": "github:aurelia/metadata@0.2.4",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.1"
    },
    "github:aurelia/bootstrapper@0.8.0": {
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.2.1",
      "aurelia-framework": "github:aurelia/framework@0.7.0",
      "aurelia-history": "github:aurelia/history@0.2.1",
      "aurelia-history-browser": "github:aurelia/history-browser@0.2.1",
      "aurelia-loader-systemjs": "github:aurelia/loader-systemjs@0.3.2",
      "aurelia-logging-console": "github:aurelia/logging-console@0.2.1",
      "aurelia-router": "github:aurelia/router@0.4.2",
      "aurelia-templating": "github:aurelia/templating@0.7.1",
      "aurelia-templating-binding": "github:aurelia/templating-binding@0.7.2",
      "aurelia-templating-resources": "github:aurelia/templating-resources@0.7.0",
      "aurelia-templating-router": "github:aurelia/templating-router@0.8.0"
    },
    "github:aurelia/dependency-injection@0.3.1": {
      "aurelia-metadata": "github:aurelia/metadata@0.2.4",
      "core-js": "npm:core-js@0.4.4"
    },
    "github:aurelia/framework@0.7.0": {
      "aurelia-binding": "github:aurelia/binding@0.2.2",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.3.1",
      "aurelia-loader": "github:aurelia/loader@0.3.1",
      "aurelia-logging": "github:aurelia/logging@0.2.1",
      "aurelia-metadata": "github:aurelia/metadata@0.2.4",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.1",
      "aurelia-templating": "github:aurelia/templating@0.7.1"
    },
    "github:aurelia/history-browser@0.2.1": {
      "aurelia-history": "github:aurelia/history@0.2.1",
      "core-js": "npm:core-js@0.4.4"
    },
    "github:aurelia/loader-systemjs@0.3.2": {
      "aurelia-loader": "github:aurelia/loader@0.3.1",
      "aurelia-metadata": "github:aurelia/metadata@0.2.4",
      "aurelia-path": "github:aurelia/path@0.4.0"
    },
    "github:aurelia/loader@0.3.1": {
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.1.2",
      "core-js": "npm:core-js@0.4.4",
      "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.5.2"
    },
    "github:aurelia/router@0.4.2": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.3.1",
      "aurelia-history": "github:aurelia/history@0.2.1",
      "aurelia-path": "github:aurelia/path@0.4.0",
      "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.2.1",
      "core-js": "npm:core-js@0.4.4"
    },
    "github:aurelia/templating-binding@0.7.2": {
      "aurelia-binding": "github:aurelia/binding@0.2.2",
      "aurelia-templating": "github:aurelia/templating@0.7.1"
    },
    "github:aurelia/templating-resources@0.7.0": {
      "aurelia-binding": "github:aurelia/binding@0.2.2",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.3.1",
      "aurelia-templating": "github:aurelia/templating@0.7.1",
      "core-js": "npm:core-js@0.4.4"
    },
    "github:aurelia/templating-router@0.8.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.3.1",
      "aurelia-metadata": "github:aurelia/metadata@0.2.4",
      "aurelia-path": "github:aurelia/path@0.4.0",
      "aurelia-router": "github:aurelia/router@0.4.2",
      "aurelia-templating": "github:aurelia/templating@0.7.1"
    },
    "github:aurelia/templating@0.7.1": {
      "aurelia-binding": "github:aurelia/binding@0.2.2",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.3.1",
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.1.2",
      "aurelia-loader": "github:aurelia/loader@0.3.1",
      "aurelia-logging": "github:aurelia/logging@0.2.1",
      "aurelia-metadata": "github:aurelia/metadata@0.2.4",
      "aurelia-path": "github:aurelia/path@0.4.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.1",
      "core-js": "npm:core-js@0.4.4"
    },
    "github:jspm/nodelibs-process@0.1.0": {
      "process": "npm:process@0.10.0"
    },
    "github:twbs/bootstrap@3.3.1": {
      "css": "github:systemjs/plugin-css@0.1.0",
      "jquery": "github:components/jquery@2.1.3"
    },
    "npm:core-js@0.4.4": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    }
  }
});


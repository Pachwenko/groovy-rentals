import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'spooky-rentals/config/environment';
import ENV from 'spooky-rentals/config/environment';

import * as Sentry from '@sentry/ember';

console.log(ENV.SENTRY_DSN);
Sentry.init({
  dsn: ENV.SENTRY_DSN,
  tracesSampleRate: 1.0,
});

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);

import { createServer, discoverEmberDataModels } from 'ember-cli-mirage';
import ENV from 'spooky-rentals/config/environment';

export default function makeServer(config) {
  let finalConfig = {
    ...config,
    models: { ...discoverEmberDataModels(), ...config.models },
    routes,
  };

  return createServer(finalConfig);
}

function routes() {
  // use localhost or whatever we have set up for testing
  this.urlPrefix = `${ENV.api.host}/${ENV.api.namespace}`;
  // using shorthands instead of defining more about the API
  // see https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  this.get('rentals');
  this.get('rentals/:id');
}

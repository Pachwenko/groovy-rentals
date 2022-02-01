import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'groovy-rentals/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api';
  host = ENV.api.host;
}

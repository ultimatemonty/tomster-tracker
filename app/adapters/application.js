import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api';
}

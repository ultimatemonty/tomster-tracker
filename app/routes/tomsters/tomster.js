import Route from '@ember/routing/route';

export default class TomsterRoute extends Route {
  model(params) {
    return this.store.findRecord('tomster', params.id);
  }
}

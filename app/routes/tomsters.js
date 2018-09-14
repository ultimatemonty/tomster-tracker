import Route from '@ember/routing/route';

export default class TomstersRoute extends Route {
  model() {
    return this.store.findAll('tomster');
  }
}

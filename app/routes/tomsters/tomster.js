import Route from '@ember/routing/route';

const TomstersTomsterRoute = Route.extend({
  model(params) {
    return this.store.findRecord('tomster', params.id);
  }
});

export default TomstersTomsterRoute;

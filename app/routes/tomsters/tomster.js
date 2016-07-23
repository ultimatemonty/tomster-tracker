import Ember from 'ember';

const { Route } = Ember;

const TomstersTomsterRoute = Route.extend({
  model(params) {
    return this.store.findRecord('tomster', params.id);
  }
});

export default TomstersTomsterRoute;

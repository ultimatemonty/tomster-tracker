import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  beforeModel(transition) {
    // transition to the bottom-most leaf route
    let routeToTransitionTo = transition.params[transition.params.length];
    this.transitionTo(routeToTransitionTo);
  }
});

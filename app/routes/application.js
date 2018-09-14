import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  beforeModel(transition) {
    // transition to the bottom-most leaf route
    let routeToTransitionTo = transition.params[transition.params.length];
    this.transitionTo(routeToTransitionTo);
  }
}

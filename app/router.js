import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('tomsters', function() {
    this.route('tomster', { path: ':id' });
  });
});

export default Router;

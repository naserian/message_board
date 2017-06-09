import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('answer1');
  this.route('answer2');
  this.route('answer3');
});

export default Router;

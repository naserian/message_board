import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('questions');
  },
  actions: {
    destroyQuestions(questions) {
      questions.destroyRecord();
      this.transitionTo('index');
    }
  }
});

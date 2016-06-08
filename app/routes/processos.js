import Ember from 'ember';

export default Ember.Route.extend({
  breadCrumb: {
    title: 'Processo Judicial'
  },
  model() {
    return this.store.query('processo', {numeroDoProcesso: ''});
  }
});

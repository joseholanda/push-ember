import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    consultar(param) {
      if (param) {
        this.store.query('processo', {numeroDoProcesso: param}).
          then(
              (result) => this.set('model', result)
          );
      } else {
        this.get('store').findAll('processo').then(this.set('model', []));
      }
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  icone: 'add',  
  actions: {
    executar() {
      this.get('onclick')();
    }
  }
});

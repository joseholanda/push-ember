import Ember from 'ember';


export default Ember.Component.extend({
  numeroDoProcesso: null,
  processos: [],
  //store: Ember.inject.service(),
  actions: {
      consultaProcesso() {
          //console.log(this.numeroDoProcesso);
          this.get('onConsulta')(this.get('numeroDoProcesso'));
          //let n = this.get('numeroDoProcesso');
          //this.get('store').query('processo', {numeroDoProcesso: n}).then((result) => this.set('processos', result));
      }
  }
});

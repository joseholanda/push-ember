import Ember from 'ember';

export default Ember.Component.extend({
  dados: {},
  mostraInscricao: null,
  actions: {
      gravar() {
          if (this.dados.id) {
              //this.model.save().then(function(resp) {
              //  console.log('Cadastro salvo com sucesso');
              //});
          }
      },
      toggleAdvogado() {
          this.dados.set('advogado', !this.dados.get('advogado'));
      }
  },
  advogadoChanged: Ember.observer('dados.advogado', function() {
      //inicializa a exibição da inscrição na oab e depois não altera mais o valor
      if (this.mostraInscricao === null) {
          this.set('mostraInscricao', this.dados.get('advogado'));
      }
      if (this.dados.get('advogado')) {
          Ember.$('#dadosAdvogado').toggle('show');
      } else {
          Ember.$('#dadosAdvogado').toggle('hide');
      }

  })
});

import Ember from 'ember';

export default Ember.Component.extend({
    uf: null,
    inscricao: null,
    ufs: ['DF', 'GO', 'RJ', 'SP', 'BA', 'MG'],
    actions: {
        selecionar(uf) {
            console.log('Antes: ' + this.uf + ' ' + this.inscricao);
            this.set('uf', uf);
            console.log('Depois: ' + this.uf + ' ' + this.inscricao);
        }
    }
});

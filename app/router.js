import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('itens');
  this.route('processos');
  this.route('pads');
  this.route('dados-pessoais');
  this.route('senha');
  this.route('sair');
  this.route('exclusao');
});

export default Router;

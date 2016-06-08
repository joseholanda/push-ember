import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  cpf: attr('number'),
  nome: attr('string'),
  advogado: attr('boolean'),
  ufInscricaoOab: attr('string'),
  inscricaoOab: attr('number'),
  telefone: attr('number'),
  celular: attr('number'),
  email: attr('string'),
  noticias: attr('boolean'),
  infoJurisprudencia: attr('boolean'),
  sexo: attr('string')
});

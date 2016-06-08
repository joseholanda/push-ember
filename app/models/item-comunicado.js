import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  item: attr('string'),
  dataEnvio: attr('date'),
  sistema: attr('string'),
  email: attr('string'),
  status: attr('string')
});

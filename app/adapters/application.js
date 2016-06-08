import DS from 'ember-data';
import ENV from '../config/environment';

const ApplicationAdapter = DS.RESTAdapter.extend({
  host: ENV.APP.api + '/push',
  namespace: 'api/v1',
});

export default ApplicationAdapter;

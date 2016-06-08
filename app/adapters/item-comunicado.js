import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
    defaultSerializer: 'item-comunicado',
    pathForType() {
        return 'itens-comunicados';
    }
});

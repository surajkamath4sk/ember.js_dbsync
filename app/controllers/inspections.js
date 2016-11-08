import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createInspection() {
      var inspection = this.store.createRecord("inspection", {
        title: this.get('Name'),
        isCompleted: this.get('isCompleted')
      });
      inspection.save();

      this.set('Name', '');
      this.set('isCompleted', false);
    },

    deleteInspection(inspection) {
      inspection.deleteRecord();
      inspection.save();
    }
  }
});

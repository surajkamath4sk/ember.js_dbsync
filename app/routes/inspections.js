import Ember from 'ember';


// Ember.Route.extend({
//     model: function () {
//         return {"key1":"value1", "key2":"value2"};
//     }
// });

export default Ember.Route.extend({
  model() {
  return this.store.findAll('inspection');
  }
});

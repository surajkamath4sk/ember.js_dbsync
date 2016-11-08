import PouchDB from 'pouchdb';
import DS from 'ember-data';
import { Adapter } from 'ember-pouch';

PouchDB.debug.enable('*');

var remote = new PouchDB('http://localhost:5984/offline');
var db = new PouchDB('local_pouch');

db.sync(remote, {
   live: true,   // do a live, ongoing sync
   retry: true   // retry if the conection is lost
});


//export default DS.JSONAPIAdapter.extend({
 //namespace: 'api/1'; // Application specific overrides go here
//});
export default Adapter.extend({
  db: db
});

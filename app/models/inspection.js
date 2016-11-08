import DS from 'ember-data';

export default DS.Model.extend({
  title       : DS.attr('string'),
  isCompleted : DS.attr('boolean'),
  rev         : DS.attr('string')
});


  //firstName: DS.attr('string'),
  //lastName:  DS.attr('string'),
  //isPersonOfTheYear: DS.attr('boolean')
//});


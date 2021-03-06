import DS from 'ember-data';

export default DS.Model.extend({
    body: DS.attr(),
    title: DS.attr(),
    answers: DS.hasMany('answer', {async: true})
});

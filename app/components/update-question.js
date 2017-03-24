import Ember from 'ember';

export default Ember.Component.extend({
    updateQuestion : false,

    actions: {
        questionUpdateShow() {
            this.set('updateQuestion', true);
        },
        update(question) {
            var params = {
                body: this.get('body'),
                title: this.get('title')
            };
            this.set('updateQuestion', false);
            this.sendAction('update', question, params);
        }
    }
});

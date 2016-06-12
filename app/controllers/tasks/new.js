import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		addTask: function(){
			var self = this;

			var title = this.get('title');
			var date = this.get('date');
			var description = this.get('description');

			//Create New Task
			var newTask = this.store.createRecord('task', {
				title: title,
				date: new Date(date),
				description: description
			});

			// Save to Database
			newTask.save();
			self.transitionToRoute('tasks.index');

			// Clear form
			this.setProperties({
				title: '',
				date: '',
				description: ''
			});
		}
	}
});

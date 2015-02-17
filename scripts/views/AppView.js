var AppView = Backbone.View.extend({
	el: '#app-view',
	initialize: function(){
		_.bindAll(
			this,
			'onAddButtonClick',
			'onItemViewAdded'
			);
		console.log('1');
	 this.posts = new PostCollection();
	 this.$list = $('#list');

	 this.$descriptionBox = $('#description');
	 this.$addButton = $('#add-button');
	 this.$addButton.on('click', this.onAddButtonClick);
	 this.posts.on('add', this.onItemViewAdded);
	},
	onAddButtonClick: function(){
		console.log('2');
		this.newItem = new PostModel();
		this.newItem.set({
			item: this.$descriptionBox.val(),
		});
		this.posts.add(this.newItem);
		this.newItem.save();
		console.log('3');
	},
	onItemViewAdded: function(newItem){
		console.log('4');	
		var newItemView = new ItemView({model: newItem});
		this.$list.append(newItemView.$item);
	}
});
var ItemView = Backbone.View.extend({

	initialize: function(newItem){
		_.bindAll(
			this,
			'onStrikeThrough'
			);
		var itemTemplate = _.template($('#my-list').html());
		this.$item = $(itemTemplate(this.model.attributes));
		this.$checkBox = $(this.$item.find('.check-box'));

	
		// this.$checkBox.on('click', this.onStrikeThrough);
	},

	onStrikeThrough: function(){
		$(this.$description).css("text-decoration", "line-through");
	
	}
});

var ItemView = Backbone.View.extend({

	initialize: function(newItem){
		_.bindAll(
			this,
			'onStrikeThrough'
			);
		var itemTemplate = _.template($('#my-list').html());
		this.$item = $(itemTemplate(this.model.attributes));
		console.log(this.$item);
		this.$checkBox = $(this.$item.find('.check-box'));
		this.$description = $(this.$item.find('.item'));
	
		this.$checkBox.on('click', this.onStrikeThrough);
	},

	onStrikeThrough: function(){
		console.log('onStrikeThrough');
		console.log(this.$checkBox.is(':checked'));
		
		if(this.$checkBox.is(':checked')===true){
			$(this.$description).css("text-decoration", "line-through");
		}else{
			$(this.$description).css("text-decoration", "none");
		}
	}
});

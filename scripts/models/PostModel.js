var PostModel = Backbone.Model.extend({
	urlRoot: 'https://tiny-pizza-server.herokuapp.com/collections/charles',
	defaults: {
		item: null,
		pinned: false
	},
	// idAttribute: '_id',
	// validate: function(attrs, options) {
	// 	if(!attrs.title) return 'Please enter a <b>title</b>.';
	// 	if(!attrs.body) return 'Please enter a <b>body</b>.';
	// }
});
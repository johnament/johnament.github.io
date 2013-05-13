define(['underscore','backbone','text!navItem.htm'], function(_, Backbone,NavItemTemp){
	var NavItemsView = Backbone.View.extend({
		el: $("#navItems"),
		initialize: function() {
			this.listenTo(this.model, "sync", this.render);
			this.model.fetch();
		},
		template: _.template(NavItemTemp),
		render: function() {
			var template = this.template;
			this.model.forEach(function(i) {
				this.$el.append(template(i.toJSON()));
			});
			return this;
		}
	});
	return NavItemsView;
});
define(['underscore','backbone','navItems','NavigationCollection'], function(_, Backbone,NavItemsView,NavigationCollection){
	var Workspace = Backbone.Router.extend({

		routes: {
			":navigate":            "doNav"
		},
		initialize: function() {
			console.log("init the router.");
			var a = new NavItemsView({model:new NavigationCollection});
			console.log("created a "+a);
		},
		doNav: function(loc) {
			console.log("navigating to "+loc);
		}
	});
	return Workspace;
});
define(['underscore','backbone','navItems'], function(_, Backbone,NavItemsView){
	var Workspace = Backbone.Router.extend({

		routes: {
			":navigate":            "doNav"
		},
		initialize: function() {
			console.log("init the router.");
			var a = new NavItemsView;
			console.log("created a "+a);
		},
		doNav: function(loc) {
			console.log("navigating to "+loc);
		}
	});
	return Workspace;
});
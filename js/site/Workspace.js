define(['underscore','backbone'], function(_, Backbone){
	var Workspace = Backbone.Router.extend({

		routes: {
			":navigate":            "doNav"
		},
		initialize: function() {
			console.log("init the router.");
			define(['navItems'], function(NavItemsView){
				var a = new NavItemsView;
			});
		},
		doNav: function(loc) {
			console.log("navigating to "+loc);
		}
	});
	return Workspace;
});
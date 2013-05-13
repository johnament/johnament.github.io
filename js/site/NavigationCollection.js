define(['underscore','backbone','NavigationModel'
], function(_, Backbone, NavigationModel){
  var NavigationCollection = Backbone.Collection.extend({
    model: NavigationModel,
	url: 'content/navigation.json'
  });
  // You don't usually return a collection instantiated
  return NavigationCollection;
});
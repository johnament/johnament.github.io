define([
  'underscore',
  'backbone',
  // Pull in the Model module from above
  'navigationModel'
], function(_, Backbone, NavigationModel){
  var NavigationCollection = Backbone.Collection.extend({
    model: NavigationModel,
	url: 'content/navigation.json'
  });
  // You don't usually return a collection instantiated
  return NavigationCollection;
});
define(['underscore','backbone'], function(_, Backbone){
  var NavigationModel = Backbone.Model.extend({
    defaults: {
      css:"",
	  link:"",
	  text:"",
	  target:"_self"
    }
  });
  return NavigationModel;
});
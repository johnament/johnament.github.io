define(['jquery','backbone','Workspace'], function($,Backbone,Workspace) {
	$(function(){
		new Workspace();
		Backbone.history.start({pushState: true});
	});
});
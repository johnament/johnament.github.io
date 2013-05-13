requirejs.config({
    "baseUrl": "js/site",
    "paths": {
      "jquery": "http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
	  "text":"http://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.5/text",
	  "backbone":"http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min",
	  "underscore":"http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min",
	  "bootstrap":"http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.1/js/bootstrap"
    },
	"shim": {
		'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
	}
});

// Load the main app module to start the app
requirejs(["init"]);
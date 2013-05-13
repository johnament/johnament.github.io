requirejs.config({
    "baseUrl": "js/site",
    "paths": {
      "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
	  "text":"//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.5/text.js",
	  "backbone":"//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min.js",
	  "underscore":"//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min.js",
	  "bootstrap":"//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.1/js/bootstrap.min.js"
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
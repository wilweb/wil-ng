// Require JS  Config File

require.config({
	paths : {
		// jquery scripts
		"jquery"				: "lib/jquery/jquery-1.10.2.min",	
		"jquery.easing" : "lib/jquery-easing/1.3/jquery.easing.1.3", 

		// hometween plugin scripts
		"lettering"			: "lib/lettering/lettering",
		"gsCss"					: "lib/greensock-v12-js/src/minified/plugins/CSSPlugin_min",
		"gsEase"				: "lib/greensock-v12-js/src/minified/easing/EasePack_min",
		"gsTweenLite"		: "lib/greensock-v12-js/src/minified/TweenLite_min",
		"gsTimelineLite": "lib/greensock-v12-js/src/minified/TimelineLite_min",
		
		// portfolio plugin scripts
		"fancybox"			: "lib/fancybox/source/jquery.fancybox.pack",
		"mixitup"				: "lib/mixitup-1.5.4/js/jquery.mixitup.min",

		// photos plugin scripts 
		"tiledGallery"	: "lib/tiled-gallery/tiled-gallery/tiled-gallery",

		// angularjs scripts
		"angular" 			: "lib/angular/angular.min",
		"ngResource" 		: "lib/angular/angular-resource.min",
		"ui.bootstrap" 	: "lib/angularui/ui-bootstrap/ui-bootstrap-tpls-0.4.0.min",
		"ngGrid" 				: "lib/angularui/ng-grid/ng-grid-2.0.7.min"

	},
	shim : {

		// plugin jquery dependencies
		"lettering"			: {deps : ["jquery"]},
		"fancybox"			: {deps : ["jquery"]},
		"mixitup"  			: {deps : ["jquery", "jquery.easing"]},		
		"jquery.easing" : {deps : ["jquery"]},

		// anjularjs 
		"angular"  			:{
			exports : "angular"
		},

		// angular dependencies
    "ngResource"		: {deps: ["angular"]},
    "ui.bootstrap"	: {deps: ["angular"]},
    "ngGrid"				: {deps: ["angular"]}
	},
    baseUrl: 'js/'
});


require(["app"],
	function(App) {
		App.initialize();
	}
);
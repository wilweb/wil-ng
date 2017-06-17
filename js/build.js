// Require JS Optimizer File - to aggregate and minify .js files
({
    baseUrl: ".",
    paths: {
    	  // require.min.js
    	  "requireLib"		: "lib/requirejs/require.min",

    	  // -- EXACT COPY OF PATHS FROM MAIN.JS --
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
				"fancybox"			: "lib/fancybox/source/jquery.fancybox.pack",	// already minified
				"mixitup"				: "lib/mixitup-1.5.4/js/jquery.mixitup.min",

				// photos plugin scripts 
				"tiledGallery"	: "lib/tiled-gallery/tiled-gallery/tiled-gallery",

				// angularjs scripts
				"angular" 		  : "lib/angular/angular.min",
				"ngResource" 		: "lib/angular/angular-resource.min",
				"ui.bootstrap" 	: "lib/angularui/ui-bootstrap/ui-bootstrap-tpls-0.4.0.min",
				"ngGrid" 				: "lib/angularui/ng-grid/ng-grid-2.0.7.min"
    },

    //optimize: "none", 		// do not minify .js; used for debugging purposes
    //optimize: "uglify", 	// minify .js files using uglify; (remember: turn mangler OFF!)
    optimize: "uglify2", 	  // minify .js files using uglify2; (remember: turn mangler OFF!)

    //If using UglifyJS for script optimization, these config options can be
    //used to pass configuration values to UglifyJS.
    //See https://github.com/mishoo/UglifyJS for the possible values.
    //https://github.com/jrburke/r.js/blob/master/build/example.build.js
    uglify: {
/*        
				toplevel: true,
        ascii_only: true,
        beautify: true,
        max_line_length: 1000,

        defines: {
            DEBUG: ['name', 'false']
        },
*/				
		    // wy: must turn mangler OFF when minifying, otherwise built-main.js won't work!
        no_mangle: true
    },

    //If using UglifyJS for script optimization, these config options can be
    //used to pass configuration values to UglifyJS.
    //For possible values see:
    //http://lisperator.net/uglifyjs/codegen
    //http://lisperator.net/uglifyjs/compress
    //https://github.com/jrburke/r.js/blob/master/build/example.build.js
    uglify2: {
/*
        output: {
            beautify: true
        },
        compress: {
            sequences: false,
            global_defs: {
                DEBUG: false
            }
        },
        warnings: true,
*/
	      // wy: must turn mangler OFF when minifying, otherwise built-main.js won't work!
        mangle: false
    },

    // removes the /* */ comments from the final main-built.js output file
    preserveLicenseComments: false,

	  // path of the main.js file so that shim can be read for plugin script dependencies
	  mainConfigFile: 'main.js',
    
    // the input file is the requirejs main.js file
    name: "main",		

    // include require.min.js in minified main-built.js
    include: "requireLib",

    // run this command to optimize (i.e. aggregate and minify) 
    // the above .js files into an output file main-built.js
    //
    //		> cd /wil-ng/app/js      // i.e. cd to where build.js is
    //		> node ../../r.js -o build.js 	
    out: "main-built.js"	
})

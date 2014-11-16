require.config({
    paths: {
        jquery: '../lib/jquery/jquery-1.11.1.min',
        text: '../lib/require/text',
        underscore: '../lib/underscore/underscore-min',
//        lodash: '../lib/lodash/lodash.min',
        backbone: '../lib/backbone/backbone-min',
        templates: '../templates',
        //routerjs: '../lib/routerjs/router.min',
        modernizr: '../lib/modernizr/modernizr-2.6.2.min',
        bootstrap: '../lib/bootstrap/bootstrap.min'
        //markdown_converter: '../lib/pagedown/Markdown.Converter',
        //markdown_sanitizer: '../lib/pagedown/Markdown.Sanitizer'
    }

});
/*define([
    'jquery',
    'modernizer',
    'bootstrap',
    'plugins'
], function ($, _) {
    "use strict";
    return {};
});*/

require([
    'jquery',
    'modernizr',
    'bootstrap',
    'plugins',
    'app'
], function ($, M, B, P, App) {
     "use strict";
    // The "app" dependency is passed in as "App"
    // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function

    App.initialize();
});

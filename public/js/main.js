require.config({
    paths: {
        'data.content': '../content',
        'data.templates': '../templates',
        'data.images': '../img',
        // javascript library
        jquery: 'lib/jquery/jquery-2.1.1.min',
        text: 'lib/require/text',
        underscore: 'lib/underscore/underscore-min',
        backbone: 'lib/backbone/backbone-min',
        pateko: 'lib/pateko/pateko',
        // none amd compliance
        modernizr: 'lib/modernizr/modernizr-2.6.2.min',
        showdown: 'lib/showdown/showdown'
    }
//    shim: {
//        }
//    },
//    enforceDefine: true
});

require([
    'app'
], function (App) {
    "use strict";
    // The "app" dependency is passed in as "App"
    // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function

    App.initialize();
});

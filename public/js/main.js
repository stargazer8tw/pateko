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
        bootstrap: '../lib/bootstrap/bootstrap.min',
        markdown_converter: '../lib/pagedown/Markdown.Converter',
        markdown_sanitizer: '../lib/pagedown/Markdown.Sanitizer'
    },
    shim: {
        'bootstrap/affix': {
            deps: ['jquery'],
            exports: '$.fn.affix'
        },
        'bootstrap/alert': {
            deps: ['jquery'],
            exports: '$.fn.alert'
        },
        'bootstrap/button': {
            deps: ['jquery'],
            exports: '$.fn.button'
        },
        'bootstrap/carousel': {
            deps: ['jquery'],
            exports: '$.fn.carousel'
        },
        'bootstrap/collapse': {
            deps: ['jquery'],
            exports: '$.fn.collapse'
        },
        'bootstrap/dropdown': {
            deps: ['jquery'],
            exports: '$.fn.dropdown'
        },
        'bootstrap/modal': {
            deps: ['jquery'],
            exports: '$.fn.modal'
        },
        'bootstrap/popover': {
            deps: ['jquery'],
            exports: '$.fn.popover'
        },
        'bootstrap/scrollspy': {
            deps: ['jquery'],
            exports: '$.fn.scrollspy'
        },
        'bootstrap/tab': {
            deps: ['jquery'],
            exports: '$.fn.tab'
        },
        'bootstrap/tooltip': {
            deps: ['jquery'],
            exports: '$.fn.tooltip'
        },
        'bootstrap/transition': {
            deps: ['jquery'],
            exports: '$.fn.transition'
        }
    },
    enforceDefine: true
});

require([
 //     'jquery',
 //     'modernizr',
 //     'bootstrap',
 //    'plugins',
    'app'
], function (App) {
    "use strict";
    // The "app" dependency is passed in as "App"
    // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function

    App.initialize();
});

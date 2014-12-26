define([
    'jquery',
//    'underscore',
//    'backbone',
    'router' // Request router.js
], function ($, Router) {
    "use strict";

    $('.has-sub').click(function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('tap');
    });

    $(function () {
        var pull = $('#pull');
        var menu = $('nav ul');
        var menuHeight = menu.height();

        $(pull).on('click', function (e) {
            e.preventDefault();
            menu.slideToggle();
        });

        $(window).resize(function () {
            var w = $(window).width();
            if (w > 320 && menu.is(':hidden')) {
                menu.removeAttr('style');
            }
        });
    });

    var initialize = function () {
        // Pass in our Router module and call it's initialize function
        Router.initialize();
    };

    return {
        initialize: initialize
    };
});

// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// using sample from http://stackoverflow.com/questions/17975922/how-to-change-active-class-wile-click-to-another-link-in-bootstrap-use-jquery
/*$(document).ready(function () {
    $('.nav li a').click(function(e) {

        $('.nav li').removeClass('active');

        var $parent = $(this).parent();
        if (!$parent.hasClass('active')) {
            $parent.addClass('active');
        }
        e.preventDefault();
    });
});*/
// Place any jQuery/helper plugins in here.


//define([
//    'jquery'
//], function ($) {
//    "use strict";
//    $('.has-sub').click(function (e) {
//        e.preventDefault();
//        $(this).parent().toggleClass('tap');
//    });
//
//    $(function () {
//        var pull = $('#pull');
//        menu = $('nav ul');
//        menuHeight = menu.height();
//
//        $(pull).on('click', function (e) {
//            e.preventDefault();
//            menu.slideToggle();
//        });
//
//        $(window).resize(function () {
//            var w = $(window).width();
//            if (w > 320 && menu.is(':hidden')) {
//                menu.removeAttr('style');
//            }
//        });
//    });
//});

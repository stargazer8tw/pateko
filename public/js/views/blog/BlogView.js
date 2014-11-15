define([
    'jquery',
    'lodash',
    'backbone',
    //'models/blog/BlogModel',
    'text!templates/blog/blogTemplate.html'
], function ($, _, Backbone, blogTemplate) {
//    "use strict";
    var BlogView = Backbone.View.extend({
        el: $("#page"),
        render: function () {
            $('.nav li').removeClass('active');
            $('.nav li a[href="' + window.location.hash + '"]').parent().addClass('active');

        }
    });
    return BlogView;
});

define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/about/aboutTemplate.html'
], function ($, _, Backbone, aboutTemplate) {
    "use strict";
    var AboutView = Backbone.View.extend({
        el: $("#page"),
        render: function () {
            $('.nav li').removeClass('active');
            $('.nav li a[href="' + window.location.hash + '"]').parent().addClass('active');
            this.$el.html(aboutTemplate);
        }
    });
    return AboutView;
});

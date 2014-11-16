define([
    'jquery',
    'underscore',
    'backbone',
    'text!defaultTemplate'
], function ($, _, Backbone, defaultTemplate) {
    "use strict";
    var AboutView = Backbone.View.extend({
        el: $("#page"),
        render: function () {
            $('.nav li').removeClass('active');
            $('.nav li a[href="' + window.location.hash + '"]').parent().addClass('active');
            this.$el.html(defaultTemplate);
        }
    });
    return AboutView;
});

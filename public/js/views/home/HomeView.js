define([
    'jquery',
    'underscore',
    'backbone',
    'text!defaultTemplate'
], function ($, _, Backbone, defaultTemplate) {
    "use strict";
    var HomeView = Backbone.View.extend({
        el: $("#page"),

        render: function () {

            $('.nav li').removeClass('active');
            $('.nav li a[href="#"]').parent().addClass('active');
            this.$el.html(defaultTemplate);

        }

    });

    return HomeView;

});

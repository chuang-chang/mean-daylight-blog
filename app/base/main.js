'use strict';

require.config({
    paths: {
        angular: '../bower_components/angular/angular.min',
        jquery: '../bower_components/jquery/dist/jquery.min',
        semantic: '../bower_components/semantic-ui/dist/semantic.min',
        // jqueryui: '../bower_components/jqueryui/jquery-ui.min',
        angularRoute: '../bower_components/angular-route/angular-route.min',
    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'jquery': {'exports': 'jquery'},
        'angularRoute': ['angular'],
        // 'jqueryui': ['jquery'],
        'semantic': ['jquery'],
    },
    priority: [
        'angular',
        'jquery',
    ]
});


window.name = "NG_DEFER_BOOTSTRAP!";

var url = window.location.pathname;
var load_route_module = url=="/"?"dl_base/dl_base_routes":"dl_"+url.slice(1,url.length)+"/dl_"+url.slice(1,url.length)+"_routes";


require([
    'angular',
    'angularRoute',
    'jquery',
    // 'jqueryui',
    'semantic',
    'app',
    'dl_base/dl_base_routes',
    'dl_tech/dl_tech_routes'
    ], function(angular, app, routes) {
    angular.element().ready(function() {
        angular.resumeBootstrap(['base']);
    });
});

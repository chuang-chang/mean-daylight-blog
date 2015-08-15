'use strict';

require.config({
    paths: {
        angular: '../bower_components/angular/angular.min',
        angularResource:'../bower_components/angular-resource/angular-resource.min',
        jquery: '../bower_components/jquery/dist/jquery.min',
        semantic: '../bower_components/semantic-ui/dist/semantic.min',
        // jqueryui: '../bower_components/jqueryui/jquery-ui.min',
        nicescroll:'../bower_components/nicescroll/jquery.nicescroll.min',
        validate:'../bower_components/validation/jqBootstrapValidation',
        angularRoute: '../bower_components/angular-route/angular-route.min',
        ueconf:'../bower_components/ueditor/ueditor.config',
        codemirror:'../bower_components/ueditor/third-party/codemirror/codemirror',
        ueall:'../bower_components/ueditor/ueditor.all',
        uelan:'../bower_components/ueditor/lang/zh-cn/zh-cn',
        sh:'../bower_components/ueditor/third-party/SyntaxHighlighter/shCore',
        color:'../bower_components/jcrop/js/jquery.color',
        jcrop:'../bower_components/jcrop/js/jquery.Jcrop.min',
    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'jquery': {'exports': 'jquery'},
        'angularRoute': ['angular'],
        'angularResource':['angular'],
        'semantic': ['jquery'],
        'nicescroll':['jquery'],
        'validate':['jquery'],
        'ueconf':{'exports':'ueconf'},
        'codemirror':{'exports':'codemirror'},
        'sh':{'exports':'sh'},
        'ueall':['jquery','codemirror','sh'],
        'uelan':['ueall'],
        'color':['jquery'],
        'jcrop':['jquery','color']
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
    'angularResource',
    'jquery',
    // 'jqueryui',
    'semantic',
    'nicescroll',
    'validate',
    'ueconf',
    'codemirror',
    'uelan',
    'sh',
    'ueall',
    'jcrop',
    'app',
    'dl_base/dl_base_routes',
    'dl_tech/dl_tech_routes',
    'dl_add/dl_add_routers'
    ], function(angular, app, routes) {
    angular.element().ready(function() {
        angular.resumeBootstrap(['base']);
    });
});

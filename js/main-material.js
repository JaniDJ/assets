requirejs.config({
    appDir: ".",
    baseUrl: "js",
    paths: { 
        'jquery': ['//cdn.derjani.me/js/jquery-3.3.1.min'],
        'clipboard': ['//cdn.derjani.me/js/clipboard.min'],
        'ionicons': ['//cdn.derjani.me/js/ionicons-4.1.2'],
        'lodash': ['//cdn.derjani.me/js/lodash-4.17.10.min'],
        'material': ['//cdn.derjani.me/js/material-1.3.0.min'],
        'moment': ['//cdn.derjani.me/js/moment-2.22.1'],
        'popper': ['//cdn.derjani.me/js/popper-1.14.3.min'],
        'sweetalert': ['//cdn.derjani.me/js/sweetalert-2.1.0.min'],
        'tooltip': ['//cdn.derjani.me/js/tooltip-1.2.0.min'],
        'anime': ['//cdn.derjani.me/js/anime.min-2.2.0']
    },
    shim: {
        'tooltip' : ['popper']
    }
});

require(["clipboard","ionicons","sweetalert","moment","material"], function($) {
    
});
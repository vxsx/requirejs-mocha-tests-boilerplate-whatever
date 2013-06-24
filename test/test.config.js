/* global window, mochaPhantomJS, mocha */
'use strict';

require.config({
    baseUrl: '/',
    paths: {
        jquery: '/js/vendor/jquery/jquery',
        chai: '/js/vendor/chai/chai',
        sinon: '/js/vendor/sinon/index',
        sinonchai: '/js/vendor/sinon-chai/lib/sinon-chai'
    },
    shim: {
        sinon: {
            exports: 'sinon'
        }
    }
});

require([
    'test/module'
], function () {
    if (window.mochaPhantomJS) { mochaPhantomJS.run(); }
    else { mocha.run(); }
});

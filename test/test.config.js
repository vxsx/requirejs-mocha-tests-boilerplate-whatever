/* global window, mochaPhantomJS, mocha */
'use strict';

require.config({
    baseUrl: '/',
    paths: {
        jquery: '/js/vendor/jquery/jquery',
        chai: '/js/vendor/chai/chai'
    }
});

require([
    'test/module'
], function () {
    if (window.mochaPhantomJS) { mochaPhantomJS.run(); }
    else { mocha.run(); }
});

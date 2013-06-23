/* global define */
define(['jquery'], function ($) {
    'use strict';

    var Module = (function () {
        return {
            a: 'b',
            $: $
        };
    }());

    return Module;
});

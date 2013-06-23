/* global define, describe, it */
/* jshint -W030: true */
define([
    'chai',
    'js/module'
], function (chai, Module) {
    'use strict';

    var expect = chai.expect;

    describe('dummy module', function () {
        it('should be an object', function () {
            expect(Module).to.not.be.an('undefined');
            expect(Module).to.be.an('object');
        });
    });
});

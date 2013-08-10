/* global define, describe, it */
/* jshint -W030: true */
define([
    'chai',
    'sinon',
    'sinonchai',
    'js/module',
    'jquery'
], function (chai, sinon, sinonChai, Module, $) {
    'use strict';

    var expect = chai.expect;
    chai.use(sinonChai);

    describe('dummy module', function () {
        it('should be an object', function () {
            expect(Module).to.not.be.an('undefined');
            expect(Module).to.be.an('object');
        });

        it('should have some members', function () {
            expect(Module.a).to.eq('b');
            expect(Module.$).to.eql($);
        });

        it('sinon works too', function () {
            var spy = sinon.spy(Module, '$');

            Module.$('body');

            expect(spy).to.have.been.calledOnce;

            spy.restore();
        });
    });
});

'use strict';

const assert = require('assert');

const myApp = require('./../app');

describe('First math test', function () {
    it('should be a number', function () {
        const mySum = myApp.mySum(2,3);
        assert.equal(Number.isInteger(mySum), true, "Function should return integer as a result");
    });
    it('should be a correct sum of two integers', function () {
        const mySum = myApp.mySum(2,3);
        assert.equal(mySum, 5);
    })
});

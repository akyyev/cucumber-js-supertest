const { Given, When, Then, Before } = require('@cucumber/cucumber');
const assert = require('assert');

Before(function() {
    this.answer = 0;
});

Given('I start with {int}', function (number, callback) {
    this.answer = number;
    callback();
});

When('I add {int}', function (number, callback) {
    this.answer += number;
    callback();
});

Then('I end up with {int}', function (number, callback) {
    assert.equal(this.answer, number);
    callback();
});

When('I multiply by {int}', function (number) {
    this.answer *= number;
});


When('I add the following numbers:', function (dataTable) {
    // rows(), rowsHash(), hashes()
    this.answer = dataTable.raw()
            .map(row => row[0])
            .map(v => parseInt(v))
            .reduce((current, next) => current + next, this.answer);
});
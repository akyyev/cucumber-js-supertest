const request = require('supertest');
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

Given('existing server application', function (callback) {
    this.app = request('https://reqres.in/');
    callback();
});

When('GET request to {string} endpoint', function (endpoint, callback) {
    this.response = this.app.get(endpoint);
    callback();
});

Then('it should return {string} status code', function (statusCode, callback) {
    this.response
        .end(function (err, res) {
            expect(res.statusCode).to.equal(+statusCode);
            expect(res.body.data.id).to.equal(3);
            expect(res.body.support.text).contain('contributions towards server costs are appreciated!');
            this.name = res.body.data.first_name;

            callback();
        });
});


Then('it should return list containing {string}', function (name, callback) {
    this.response.end(function (err, res) {
        res.data.forEach(user => {
            if (user.id === 3) {
                expect(user.first_name).to.equal(name);
            }
        });
    })
    callback();
});
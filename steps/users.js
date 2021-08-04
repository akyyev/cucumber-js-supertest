const { When, Then } = require('@cucumber/cucumber');
const assert = require('assert');


When('I create a new user with details:', function (dataTable) {
    this.table = dataTable.rowsHash();
    // this.table = dataTable.hashes(); // --> for rows
});

Then('the user is created successfully', function() {
    console.log(this);
    assert.equal(this.table.Username, 'graham');
});
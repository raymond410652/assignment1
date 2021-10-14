var assert = require('assert');
var app = require('../server.js');
var http = require('http');

describe('Server test', function() {
    // The function passed to before() is called before running the test cases.
    before(function() {
        console.log("before test");
    });

    // The function passed to after() is called after running the test cases.
    after(function() {
        console.log("after test");
    });


    describe('get/api/getlist', function() {
        it('should return all products', function() {
            http.get('http://localhost:3000/api/getlist', function(response) {
                // Assert the status code.
                assert.equal(response.statusCode, 200);

                var body = '';
                response.on('data', function(d) {
                    body += d;
                });
                response.on('end', function() {
                    // Let's wait until we read the response, and then assert the body
                    // is 'Hello, Mocha!'.
                  
                    assert.equal(body, 'Hello, Mocha!');
                });
            });
        });
    });
   

});
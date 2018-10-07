/*
 * Primary file for the API
 *
 */
 
// Dependencies
var http = require('http');
var url = require('url');
var StringDecoder = require('string_decoder').StringDecoder;
var fs = require('fs');
var server = require('./server');
var config = require('./config');

var httpServer = http.createServer(server);

// Start the HTTP server
httpServer.listen(config.httpPort, function() {
  console.log('The server is listening on port ' + config.httpPort);
});


var express = require('express');
var jwt = require('jsonwebtoken');
var appServer = express();
var port = process.env.PORT || 8080;

appServer.get('/', function(serverRequest, serverResponse) {    
	
	var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL21hZGh1LWF1dGguYXV0aDAuY29tLyIsInN1YiI6IjhtMkF3YXMyZ1djQVNLaTdzNW5VM3ZPM2V4VVN0M0hFQGNsaWVudHMiLCJhdWQiOiJodHRwczovL2FsZXhhLWJhbmsuYXBpIiwiaWF0IjoxNTE5NzA5ODQ3LCJleHAiOjE1MTk3OTYyNDcsImF6cCI6IjhtMkF3YXMyZ1djQVNLaTdzNW5VM3ZPM2V4VVN0M0hFIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.iduPOGHeo2DPCtKZaBuNqh94xVudalMOAjPRDkj6LcI';
	jwt.verify(token, 'KPYlY29oD3mabd4NSXJZP4QrLqtzdZah', function(error, decodedPayload) {
		if(error) {
			return serverResponse.send('Access Token not authorized');
		} else {
		    	return serverResponse.send(decodedPayload);			
		}
	});
});

var request = require("request");

appServer.get('/getAccessToken', function(serverRequest, serverResponse) {  

	var token;
		
	var options = { method: 'POST',
	  // url: 'https://madhu-auth.auth0.com/oauth/token',
	  url: 'https://madhu-auth.auth0.com/authorize',
	  headers: { 'content-type': 'application/json' },
	  body: '{"scope": "openid", "client_id":"8m2Awas2gWcASKi7s5nU3vO3exUSt3HE","client_secret":"wE3tuyod3g-Sfs78424U3nEPyC4pPofpKUnOhWNjS_gM3kgydSLGf6oQIUN28_My","audience":"https://alexa-bank.api","grant_type":"client_credentials"}' };

	request(options, function (error, response, body) {
	  if (error) throw new Error(error);
	  token = body;
	  console.log(body);
	  return body;
	});
	
	return serverResponse.send(token);	
});
	      
appServer.listen(port, function() {
    console.log('Sever is listening');
});

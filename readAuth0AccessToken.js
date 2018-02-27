var express = require('express');
var jwt = require('jsonwebtoken');
var appServer = express();
var port = process.env.PORT || 8080;

appServer.get('/', function(serverRequest, serverResponse) {    
    
	var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL21hZGh1LWF1dGguYXV0aDAuY29tLyIsInN1YiI6IjhtMkF3YXMyZ1djQVNLaTdzNW5VM3ZPM2V4VVN0M0hFQGNsaWVudHMiLCJhdWQiOiJodHRwczovL2FsZXhhLWJhbmsuYXBpIiwiaWF0IjoxNTE5NzA5ODQ3LCJleHAiOjE1MTk3OTYyNDcsImF6cCI6IjhtMkF3YXMyZ1djQVNLaTdzNW5VM3ZPM2V4VVN0M0hFIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.iduPOGHeo2DPCtKZaBuNqh94xVudalMOAjPRDkj6LcI';

	jwt.verify(token, 'KPYlY29oD3mabd4NSXJZP4QrLqtzdZah', function(error, decodedPayload) {
		if(error) {
			return serverResponse.send(error + 'Access Token not authorized');
		} else {
		    	return serverResponse.send(decodePayload);
			// callback(null, {"userId": decodedPayload.user_id, "userName": decodedPayload.name});
		}
	});
});
	      
appServer.listen(port, function() {
    console.log('Sever is listening');
});

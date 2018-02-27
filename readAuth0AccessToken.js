exports.handler = function(event, context, callback) {
    
    var jwt = require('jsonwebtoken');
    
	var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL21hZGh1LWF1dGguYXV0aDAuY29tLyIsInN1YiI6IjhtMkF3YXMyZ1djQVNLaTdzNW5VM3ZPM2V4VVN0M0hFQGNsaWVudHMiLCJhdWQiOiJodHRwczovL2FsZXhhLWJhbmsuYXBpIiwiaWF0IjoxNTE5NzA5ODQ3LCJleHAiOjE1MTk3OTYyNDcsImF6cCI6IjhtMkF3YXMyZ1djQVNLaTdzNW5VM3ZPM2V4VVN0M0hFIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.iduPOGHeo2DPCtKZaBuNqh94xVudalMOAjPRDkj6LcI';

	jwt.verify(token, '', function(error, decodedPayload) {
		if(error) {
			callback(error, 'Access Token not authorized');
		} else {
		    callback(null, decodedPayload);
			callback(null, {"userId": decodedPayload.user_id, "userName": decodedPayload.name});
		}
	});
};

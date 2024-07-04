import express from 'express'
const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');


// Define a secret key for signing the tokens
const secret = 'some-secret-key';

// Define a middleware function to verify the token
const verifyToken = (req, res, next) => {
  // Get the token from the request header
  const token = req.headers['authorization'];
  // If the token is not present, send a 401 response
  if (!token) {
    return res.status(401).send('Access denied');
  }
  // Verify the token using the secret key
  jwt.verify(token, secret, (err, decoded) => {
    // If the token is invalid, send a 403 response
    if (err) {
      return res.status(403).send('Invalid token');
    }
    // If the token is valid, set the req.user to the decoded payload
    req.user = decoded;
    // Call the next middleware function
    next();
  });
};
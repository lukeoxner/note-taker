// requiring in necessary node modules
const express = require('express');
const path = require('path');
const fs = require('fs');

// telling node i am creating an express server
const app = express();

// setting port for heroku deployment, or localhost
let PORT = process.env.PORT || 8080;

// setting up express app for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

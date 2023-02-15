const express = require('express');
const app = express();
app.use(express.json());

const Route = require('./RoutePostData');
app.use('/',Route);


module.exports = app;
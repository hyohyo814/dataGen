const express = require('express');
const app = express();

const healthRouter = require('./controllers/health');

app.use(express.json());

app.use('/health', healthRouter);

module.exports = app;
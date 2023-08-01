const express = require('express');
const app = express();
const config = require('./utils/config');

const healthRouter = require('./controllers/health');

const { PORT } = require('./utils/config');
const { connectToDatabase } = require('./utils/db');

app.use(express.json());

app.use('/health', healthRouter);

const start = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

start();
const express = require('express');
const app = express();

const healthRouter = require('./controllers/health');
const generateRouter = require('./controllers/generate');

const { PORT } = require('./utils/config');
const { connectToDatabase } = require('./utils/db');

app.use(express.json());

app.use('/health', healthRouter);
app.use('/api/generate', generateRouter);

const start = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

start();
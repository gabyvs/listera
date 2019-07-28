require('dotenv').config({ path: '.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();
server
  .start({
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }},
    (details) => console.log(`The server is running on http://localhost:${details.port}`)
  );

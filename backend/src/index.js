require('dotenv').config();
const createServer = require('./createServer');
const db = require('./db');
const cors = require('cors');

const server = createServer();
server.express.use(cors({
  origin: function(origin, callback){
    return callback(null, true);
  },
  optionsSuccessStatus: 200,
  credentials: true
}));
server
  .start({
    cors: {
      credentials: true,
      origin: [
        process.env.FRONTEND_URL,
        "http://localhost:3000"
      ]
    }
    },
    (details) => console.log(`The server is running on http://localhost:${details.port}`)
  );

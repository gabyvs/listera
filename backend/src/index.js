require('dotenv').config();
const createServer = require('./createServer');
const cors = require('cors');

const server = createServer();
// TODO: probably I don't need both configurations, but removing any of those makes calls fail. It would need research.
server.express.use(cors({
  origin: [
    process.env.FRONTEND_URL,
    "http://localhost:3000"
  ],
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

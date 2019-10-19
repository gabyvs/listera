require('dotenv').config();
const createServer = require('./createServer');
const cors = require('cors');

const whitelist = [
  process.env.FRONTEND_URL,
  "http://localhost:4444",
  "http://localhost:3000"
];

function checkPermissions (origin, callback){
  if (!origin || whitelist.indexOf(origin) !== -1) {
    return callback(null, true)
  }
  return callback(new Error('Not allowed by CORS'))
}

const server = createServer();
// TODO: probably I don't need both configurations, but removing any of those makes calls fail. It would need research.
server.express.use(cors({
  origin: checkPermissions,
  optionsSuccessStatus: 200,
  credentials: true
}));
server
  .start({
      cors: {
        credentials: true,
        origin: checkPermissions
      }
    },
    (details) => console.log(`The server is running on http://localhost:${details.port}`)
  );

const app = require("./app.js");
const https = require("https");
const cors = require('cors');
const options = require("./config/pem_config").options;
const httpPort = 3000;
const httpsPort = 443;

/*
https.createServer(options, app).listen(httpsPort, () => {
  console.log(`HTTPS: Express listening on port ${httpsPort}`);
});
*/

const corsOption = { origin : 'http://localhost:3000',credentials : true,}
app.use(cors(corsOption));

app.listen(httpPort, () => {
  console.log(`HTTP: Express listening on port ${httpPort}`);
});

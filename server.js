const http = require("http");
const app = require("./src/app.js");
const server = http.createServer(app);
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server is runing on PORT ${PORT}`);
});

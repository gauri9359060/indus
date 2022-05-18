const http = require("http");
const app = require("./Routes/emoji");

const connectionToDB = require('./dbConnections/mongoDB')

const PORT = 9008;
http.createServer(app).listen(PORT,()=>{
    new connectionToDB();
    console.log(`server is running at ${PORT}`)
})
const express = require("express")
const mongoose = require("mongoose")
const dbconfig = require("./src/config/dbconfig")
const routes = require("./src/routes")
const app = express()
const PORT = 5200

mongoose.connect(dbconfig.mongo.uri, dbconfig.mongo.options);

mongoose.connection.on('connected', function() {
  console.error(`mongodb connected`);
});

mongoose.connection.on('error', function(err) {
  console.error(`mongodb connection error: ${err}`);
  process.exit(-1); // eslint-disable-line no-process-exit
});

app.use("/api",routes)
app.listen(PORT,()=>{
    console.log("Server is listening on PORT ",PORT)
})
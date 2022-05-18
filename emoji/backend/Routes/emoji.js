const express = require("express")
const app = express();
const emojiController = require("../Controllers/emoji") 
const bodyParser = require("body-parser");
app.use(bodyParser.json([]));


app.post("/saveText", emojiController.saveText)
module.exports = app;
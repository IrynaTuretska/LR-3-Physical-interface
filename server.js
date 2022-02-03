const express = require("express");
var app = express();
app.use(express.static(__dirname));
app.listen(4000, "0.0.0.0", () => console.log("Running at Port 4000"));

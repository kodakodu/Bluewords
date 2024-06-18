const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

//app.use(require('cors')())

app.get("/", (req, res) => res.send("Hello world"));

app.listen(port, () => console.log(`Server on port ${port}...`));

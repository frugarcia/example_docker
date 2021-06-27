const express = require("express");
const app = express();
const port = process.env.HTTP_SERVER_PORT || 3000;

console.log("MENSAJE DE PRUEBA DE INICIO DE SCRIPT");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

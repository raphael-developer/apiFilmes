const express = require("express");
const app = express();

const port = 5555;

const routes = require("./router");

app.use(express.json());
app.use(routes);

app.listen(port, () =>
  console.log(`Rodando no link => http://localhost:${port}`)
);

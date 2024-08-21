import express from "express";
import { build } from "./main";

build();

const app = express();
const port = 3000;

app.use(express.static("dist"));

app.listen(port, () => {
  console.log(`Listening on localhost:${port}...`);
});

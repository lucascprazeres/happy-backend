import "dotenv/config";

import express from "express";
import "express-async-errors";

import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(3333, () => console.log("listening on port 3333..."));

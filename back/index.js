import express from "express";
import cors from "cors";
import Route from "./routes/routes.js";
import process from "node:process";

const app = express();

app.use(cors());
app.use(express.json());
app.disable("x-powered-by");
app.use(Route);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log("server on port", PORT);
});

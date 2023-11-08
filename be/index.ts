import express, { Application, Response } from "express";
import cors from "cors";
import { dbConnection } from "./utils/dbConfig";
import { mainApp } from "./mainApp";

const app: Application = express();

app.use(express.json());
app.use(cors());

mainApp(app);
const server = app.listen(2244, () => {
  dbConnection();
});

process.on("uncaughtException", (err: Error) => {
  console.log("uncaughtException: ", err);

  process.exit(1);
});
process.on("unhandledRejection", (reason: any) => {
  console.log("unhandledRejection: ", reason);

  server.close(() => {
    process.exit(1);
  });
});

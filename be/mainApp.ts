import { Application, Request, Response } from "express";
import kids from "./router/kidRouter";

export const mainApp = (app: Application) => {
  try {
    app.use("/api/v1", kids);
    app.get("/", (req: Request, res: Response) => {
      try {
        res.status(200).json({
          message: "Welcome to Our API",
        });
      } catch (error) {
        return res.status(404).json({
          message: "Error ready default API",
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

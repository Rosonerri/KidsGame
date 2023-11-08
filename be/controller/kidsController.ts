import { Request, Response } from "express";
import kidsModel from "../model/kidsModel";

export const createKids = async (req: Request, res: Response) => {
  try {
    const { name, image } = req.body;

    const kids = await kidsModel.create({
      name,
      image,
    });

    return res.status(201).json({
      message: "created",
      data: kids,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};

export const viewKids = async (req: Request, res: Response) => {
  try {
    const kids = await kidsModel.find();

    return res.status(200).json({
      message: "read",
      data: kids,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};

export const viewSortedKids = async (req: Request, res: Response) => {
  try {
    const kids = await kidsModel.find().sort({ name: 1 });

    return res.status(200).json({
      message: "read sorted",
      data: kids,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};

import { Request, Response } from "express";
import UserGenerator from "../Utils/UserGenerator";

export const generateUsers = (req: Request, res: Response) => {
  const { region, errors, seed, page } = req.query;

  const seedValue = parseInt(seed as string) + parseInt(page as string);
  const userGenerator = new UserGenerator(seedValue, region as string);

  const users = [];
  for (let i = 0; i < 20; i++) {
    users.push(
      userGenerator.generateUserData(i + 1, parseFloat(errors as string))
    );
  }

  res.json(users);
};

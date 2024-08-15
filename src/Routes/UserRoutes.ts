import { Router } from "express";
import { generateUsers } from "../Controllers/UserController";

export const userRouter = Router();

userRouter.get("/generate", generateUsers);

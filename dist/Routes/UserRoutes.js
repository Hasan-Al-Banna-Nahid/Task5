"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const UserController_1 = require("../Controllers/UserController");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get("/generate", UserController_1.generateUsers);

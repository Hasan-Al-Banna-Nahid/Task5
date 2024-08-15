"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUsers = void 0;
const UserGenerator_1 = require("../Utils/UserGenerator");
const generateUsers = (req, res) => {
    const { region, errors, seed, page } = req.query;
    const seedValue = parseInt(seed) + parseInt(page);
    const userGenerator = new UserGenerator_1.default(seedValue, region);
    const users = [];
    for (let i = 0; i < 20; i++) {
        users.push(userGenerator.generateUserData(i + 1, parseFloat(errors)));
    }
    res.json(users);
};
exports.generateUsers = generateUsers;

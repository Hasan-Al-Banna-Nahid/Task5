"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    index: Number,
    identifier: String,
    name: String,
    address: String,
    phone: String,
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('User', userSchema);

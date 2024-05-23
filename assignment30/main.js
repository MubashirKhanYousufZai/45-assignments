"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let user_names = [];
let users = await inquirer_1.default.prompt([
    {
        name: "users",
        message: "We want some user for this website",
        type: "confirm"
    }
]);

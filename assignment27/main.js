"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let age = await inquirer_1.default.prompt([
    {
        name: "Question",
        message: "What is your age?",
        type: "input",
    },
]);
if (age.Question == 0 < 2) {
    console.log("You are Baby");
}
else if (age.Question == 2 < 4) {
    console.log("You are Toddler");
}
else if (age.Question == 4 < 13) {
    console.log("You are Kid");
}
else if (age.Question == 13 < 20) {
    console.log("You are Teenager");
}
else if (age.Question == 20 < 65) {
    console.log("You are Adult");
}
else
    (age.Question == 65 > 65);
{
    console.log("You are Elder");
}

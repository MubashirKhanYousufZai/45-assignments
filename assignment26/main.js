"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let alien_color = await inquirer_1.default.prompt([
    {
        name: "color",
        message: "Choose one color",
        type: "list",
        choices: ["Green", "Yellow", "Red"],
    },
]);
if (alien_color == "Green") {
    console.log("You earned 5 Points");
}
else if (alien_color == "Yellow") {
    console.log("You earned 10 Points");
}
else
    (alien_color == "Red");
{
    console.log("You eraned 15 points");
}

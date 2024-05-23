"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let favourite_fruit;
favourite_fruit = ["WaterMelon", "Mango", "Chickoo"];
let fruit = await inquirer_1.default.prompt([
    {
        name: "Yours",
        message: "What is your Favourite fruit?",
        type: "input"
    }
]);
if (fruit.Yours == "WaterMelon") {
    console.log("You really like WaterMelons");
}
else if (fruit.Yours == "Mango") {
    console.log("You really like Mangos");
}
else
    (fruit.Yours == "Chickoo");
{
    console.log("You really like Chickoo");
}

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let current_users = ["Angry bird", "Leo boy", "Khan boy", "Asthetic 14", "introvert maaz"];
let new_users = await inquirer_1.default.prompt([
    {
        name: "new_users",
        message: "Please select a user name",
        type: "list",
        choices: ["Asthetic boy", "Leo girl", "Khan boy", "introvert maaz", "Papa-Ki-Pari"]
    }
]);
if (new_users == current_users) {
    console.log("This user name is not available");
}
else
    (new_users = !current_users);
{
    console.log("Your user name is selected");
}

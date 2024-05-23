import inquirer from "inquirer";
let user_names = [];

let users = await inquirer.prompt([
    {
        name: "users",
        message: "We want some user for this website",
        type: "confirm"
    }
])
import inquirer from "inquirer";
let age = await inquirer.prompt([
  {
    name: "Question",
    message: "What is your age?",
    type: "input",
  },
]);
if (age.Question == 0 < 2) {
  console.log("You are Baby");
} else if (age.Question == 2 < 4) {
  console.log("You are Toddler");
} else if (age.Question == 4 < 13) {
  console.log("You are Kid");
} else if (age.Question == 13 < 20) {
  console.log("You are Teenager");
} else if (age.Question == 20 < 65) {
  console.log("You are Adult");
} else (age.Question == 65 > 65);
{
  console.log("You are Elder");
}

import inquirer from "inquirer";
let alien_color = await inquirer.prompt([
  {
    name: "color",
    message: "Choose one color",
    type: "list",
    choices: ["Green", "Yellow", "Red"],
  },
]);
if (alien_color == "Green") {
  console.log("You earned 5 Points");
} else if (alien_color == "Yellow") {
  console.log("You earned 10 Points");
} else (alien_color == "Red")
{
  console.log("You eraned 15 points");
}

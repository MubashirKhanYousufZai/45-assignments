import inquirer from "inquirer"; 
 let alien_color = await inquirer.prompt([
    {
        name: "color",
        message: "Choose one color",
        type: "list",
        choices: ["Red" , "Green" , "Yellow"]
    }
 ])
 if (alien_color == 'Green'){
    console.log("You Earned 5 points");
    
 } else (alien_color == 'Red'); {
    console.log("You earned 10 points");
    
 }
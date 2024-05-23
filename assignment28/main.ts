import inquirer from "inquirer"
 let favourite_fruit;
  favourite_fruit= ["WaterMelon" , "Mango" , "Chickoo"];
let fruit = await inquirer.prompt([
    {
        name: "Yours",
        message: "What is your Favourite fruit?",
        type: "input"
    }
]);
if (fruit.Yours == "WaterMelon"){
    console.log("You really like WaterMelons");
    
} else if (fruit.Yours == "Mango") {
    console.log("You really like Mangos");
    
} else (fruit.Yours == "Chickoo"); {
    console.log("You really like Chickoo");
    
}
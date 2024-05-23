import inquirer from "inquirer";
console.log("Press enter for more information");
 
let nationalItems = await inquirer.prompt([
     {
         name: "National-Sport",
         message: "Hockey is the national sport of Pakistan",  
     },
     {
        name: "National-Drink",
        message: "Sugar cane juice is the national drink of Pakistan",
     },
     {
        name: "National-Dish",
        message: "Nihari is the national dish of Pakistan"
     },
     {
        name: "National-Mountain",
        message: "K-2 is the national mountain of Pakistan"
     },
     {
        name: "National-River",
        message: "Indus-River is the national river Of Pakistan"
     }
 ]);
   
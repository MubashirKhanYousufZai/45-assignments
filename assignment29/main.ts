import inquirer from "inquirer"
 let user_names =["Admin" , "Adnan" , "Usman" , "Imran" , "Kamran"];

let website = await inquirer.prompt([
    {
        name: "user",
        message: "Would you like too see a status report?",
        type: "confirm"
    }
])
console.log(`Hello ${user_names[0]},thanks for log in again`);
console.log(`Hello ${user_names[1]},thanks for log in again`);
console.log(`Hello ${user_names[2]},thanks for log in again`);
console.log(`Hello ${user_names[3]},thanks for log in again`);
console.log(`Hello ${user_names[4]},thanks for log in again`);
import inquirer from "inquirer";
let current_users = ["Angry bird" , "Leo boy" , "Khan boy" , "Asthetic 14" , "introvert maaz"];
let new_users= await inquirer.prompt([
    {
        name: "new_users",
        message: "Please select a user name",
        type: "list",
        choices: ["Asthetic boy" , "Leo girl" , "Khan boy" , "introvert maaz" , "Papa-Ki-Pari"]
    }
])
if (new_users == current_users){
    console.log("This user name is not available");
    
} else (new_users =! current_users);{
    console.log("Your user name is selected")
    
}

#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000; //Dollar
let myPin = 1234;
let pinAnwser = await inquirer.prompt([
    { name: "pin",
        message: "Enter your pin number",
        type: "number" }
]);
if (pinAnwser.pin === myPin) {
    console.log("correct pin number!!!");
    let operationAns = await inquirer.prompt([
        { name: "operation",
            message: "Please select an option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            { name: "amount",
                message: "Enter your amount",
                type: "number" }
        ]);
        myBalance -= amountAns.amount;
        {
            if (myBalance >= amountAns.amount) {
                console.log("Your balance is" + myBalance);
            }
            else {
                console.log("Insufficient Balance!");
            }
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log("Your balance is" + myBalance);
    }
    else if (operationAns.operation === "fast cash") {
        let cashAmount = await inquirer.prompt([
            { name: "cash",
                message: "Enter your amount",
                type: "list",
                choices: ["5000", "10000", "15000", "20000"]
            }
        ]);
        myBalance -= cashAmount.cash;
        console.log("Your remaining balance is " + myBalance);
    }
}
else {
    console.log("incorrect pin number!!");
}

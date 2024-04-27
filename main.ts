#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// display a colourfull welcome message
console.log(chalk.bgYellow("\n \t\tcode with Aanish - word counter"));
console.log("=".repeat(60));

// prompt the user to enter a sentence
let answers = await inquirer.prompt([
  {
    name: "sentence",
    type: "input",
    message: "Enter a sentence",
  },
]);

// triming the sentence and splitting it into words based on "spaces"

let words = answers.sentence.trim().split(" ");

// analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- sentence word:"));
console.log(words);
console.log(
  chalk.bold(`\n - word count: ${chalk.bold.blackBright(words.length)}`)
);
console.log("=".repeat(60));

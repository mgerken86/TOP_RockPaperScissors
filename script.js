prompt("Choose rock, paper, or scissors");

const choices = [rock, paper, scissors];

const randomChoice = Math.floor(Math.random() * choices.length);
const computerChoice = choices[randomChoice];

console.log("computerChoice");
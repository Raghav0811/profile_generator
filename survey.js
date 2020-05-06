const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Whats your name? ', (answer1) => {
  rl.question("How old are you? ", (answer2) => {
    rl.question("What's your favorite food? ", (answer3) => { 
      rl.question("Which is your favorite sport? ", (answer4) => { 
        console.log(`${answer1} is ${answer2} years old and their favorite thing to eat is ${answer3}. Their favorite sport is ${answer4}.`);
      rl.close();
      });
    });
  });
});


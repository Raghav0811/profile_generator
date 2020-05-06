const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Whats your name? ', (answer1) => {
  rl.question("How old are you? ", (answer2) => {
    rl.question("What's an activity you like doing? ", (answer3) => {
      rl.question("What's your favorite food? ", (answer4) => { 
       rl.question("Which is your favorite sport? ", (answer5) => { 
        console.log(`${answer1} is ${answer2} years old and their favorite activity is ${answer3}. Their favourite food is ${answer4} and favourite sport is ${answer5}.`);
        rl.close();
        });
      });
    });
  });
});


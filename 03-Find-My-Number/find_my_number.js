//insert your pseudocode below
/*
here

the computer generate a number 
the user has to guess the number 
the user insert a number 
the computer will say whether it is higher or lower or correct 
if it was not correct then the user can has another guess and keep trying until be correct.

 
*/

//insert your code below

var Random_number, Guess;

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}


Random_number = (typeof Random_number == 'number' ? Random_number : 0) + mathRandomInt(1, 100);
while (!(Guess == Random_number)) {
  Guess = Number(window.prompt('Write your guess'));
  if (Guess == Random_number) {
    window.alert('correct');
  }
  if (Guess > Random_number) {
    window.alert('Not correct, your answer is higher than the requested number, try again please. ');
  }
  if (Guess < Random_number) {
    window.alert('Not correct, your answer is lower than the requested number, try again please. ');
  }
}

/* first solution I did where the program give me the right generated number */

var Random_number, Second_guess;

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}


Random_number = mathRandomInt(1, 100);
Second_guess = 50;
if (Random_number == Second_guess) {
  window.alert(Second_guess);
}
while (Random_number < Second_guess) {
  Second_guess = Second_guess - 1;
}
while (Random_number > Second_guess) {
  Second_guess = Second_guess + 1;
}
window.alert(Second_guess);
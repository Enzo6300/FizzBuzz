///// FIZZ-BUZZ réaliser en période d'apprentisage du Java script [28 / 02 / 2024] ////////

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let output;
    /// LES MULTIPLES DE 3 //////////
    if (i % 3 === 0) output = "Fizz";
    /// LES MULTIPLES DE 5 //////////
    if (i % 5 === 0) output = "Buzz";
    /// LES MULTIPLES DE 3 ET 5 //////
    if (i % 3 === 0 && i % 5 === 0) output = "FizzBuzz";

    console.log(output ? output : i);
  }
}

fizzBuzz();

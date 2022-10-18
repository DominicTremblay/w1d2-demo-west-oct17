// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// extract the arguments from the command line
const args = process.argv.slice(2);
console.log('args:', args);
// Edge case: check if we have at least 2 arguments
if (args.length < 2) {
  console.log(`Error: please enter at least 2 numbers`);
  // stop the execution here
  process.exit();
}

// iterate through the arguments
let total = 0;
for (let arg of args) {
  // Edge case: If any argument is not a number, output an error message

  if (isNaN(Number(arg))) {
    console.log(`Error: please enter only numbers`);
    process.exit();
  }

  // Edge case: check if the arg is a whole number => skip it if not
  // Number(arg) === parseInt(arg)
  // Number(arg) % 1 === 0
  // Number.isInteger()
  if (Number.isInteger(Number(arg))) {
    total += Number(arg);
    console.log('arg:', arg, 'type:', typeof arg, 'total:', total);
  }
}


// display the total value
console.log('Total:', total);

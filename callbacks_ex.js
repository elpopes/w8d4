// class Clock {
//   constructor() {
//     // 1. Create a Date object.
//     const now = new Date();
//     // 2. Store the hours, minutes, and seconds.
//     this.hours = now.getHours();
//     this.minutes = now.getMinutes();
//     this.seconds = now.getSeconds();
//     // 3. Call printTime.
//     // printTime(hours, minutes, seconds);
//     // 4. Schedule the tick at 1 second intervals.
//     setInterval(this._tick.bind(this), 1000);
//   }

//   printTime() {
//     // Format the time in HH:MM:SS
//     const time = `${this.hours}:${this.minutes}:${this.seconds}`;

//     // Use console.log to print it.
//     console.log(time);
//   }

//   _tick() {
//     // 1. Increment the time by one second.
//     this.seconds += 1;

//     if (this.seconds === 60) {
//       this.minutes += 1;
//       this.seconds = 0;
//     }

//     if (this.minutes === 60) {
//       this.minutes = 0;
//       this.hours += 1;
//     }

//     if (this.hours === 24) {
//       this.hours = 0;
//     }
//     // 2. Call printTime.
//     this.printTime();
//   }
// }

// const clock = new Clock();

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function addNumbers(sum, nums_left, completionCallback) {
//   if (nums_left > 0) {
//     rl.question("Enter a number:", function (answer) {
//       const parsedNum = parseInt(answer);
//       sum += parsedNum;
//       console.log(`partial sum = ${sum}`);
//       debugger;
//       addNumbers(sum, nums_left - 1, completionCallback);
//     });
//   } else {
//     rl.close();
//     completionCallback(sum);
//   }
// }
// addNumbers(0, 3, (sum) => console.log(`Total Sum: ${sum}`));

// Function.prototype.myBind = function (context) {
//   const fn = this;
//   return () => {
//     fn.apply(context);
//   };
// };

const readline = require("readline");
const rl2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askIfGreaterThan(ele1, ele2, callback) {
  rl2.question(`Is ${ele1} greater than ${ele2}?: `, function (answer) {
    if (answer == "yes") {
      debugger;
      callback(true);
    } else {
      debugger;
      callback(false);
    }
    rl2.close();
  });
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {

  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});


bubbleSort(arr, sorter) {
    sorted = true
    while !sorted
    sorted = true
    for (i = 0; i < arr.length - 1; i++) {
        // if arr[i] > 


    }
}

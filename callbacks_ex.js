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
  rl2.question(`Is ${ele1} greater than ${ele2}?: `, 
  function(answer) {
    if (answer == "yes"){
      debugger
      callback(true)
    } else {
      debugger
      callback(false)
    }
    rl2.close() 
  } )
}

function absurdBubbleSort(arr, sortCompletion) {

}

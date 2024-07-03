const fs = require("fs");

// Asynchronous file read
fs.readFile(__filename, () => {
  console.log("File read complete");

  setImmediate(() => {
    console.log("setImmediate");
  });

  setTimeout(() => {
    console.log("setTimeout");
  }, 0);

  process.nextTick(() => {
    console.log("process.nextTick");
  });
});

console.log("Start of script");

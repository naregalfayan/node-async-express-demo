const fs = require("fs");

console.log("Start of script");

// Synchronous file read
const data = fs.readFileSync(__filename);
console.log("Synchronous file read complete");

// Asynchronous file read
fs.readFile(__filename, (err, data) => {
  if (err) throw err;
  console.log("Asynchronous file read complete");
});

console.log("End of script");

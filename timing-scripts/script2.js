console.log("Start of script");

process.nextTick(() => {
  console.log("process.nextTick");
});

Promise.resolve().then(() => {
  console.log("Promise resolved");
});

setImmediate(() => {
  console.log("setImmediate");
});

console.log("End of script");

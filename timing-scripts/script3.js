setTimeout(() => {
  console.log("setTimeout with 0 ms");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
});

console.log("Start of script");

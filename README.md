Implement

Write a script that performs an asynchronous file read operation and includes setImmediate, setTimeout, and process.nextTick. Add console log statements to observe how these operations interact.

Write a script that includes process.nextTick, a resolved Promise, and a setImmediate callback. Add console log statements to observe the execution order of these different types of tasks.

Write a script that uses both setImmediate and setTimeout with a delay of 0 milliseconds.

Write a script that includes a synchronous file read operation and an asynchronous file read operation using fs.readFileSync and fs.readFile, respectively.

Creating a Simple Server with Express

Create a new directory for your Express server project.

Initialize a new Node.js project and install Express.

Create an Express server with routes that:

Serve a home page (/).

Serve an about page (/about).

Handle a POST request to /data that reads and writes data to a file asynchronously.

Add middleware to log each request and measure the time taken to handle it.

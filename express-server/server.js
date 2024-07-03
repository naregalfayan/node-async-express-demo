const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;

// Middleware to log each request and measure the time taken to handle it
app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.url} ${res.statusCode} - ${duration}ms`);
  });
  next();
});

app.use(express.json());

// Route for home page
app.get("/", (req, res) => {
  res.send("Home Page");
});

// Route for about page
app.get("/about", (req, res) => {
  res.send("About Page");
});

// Route to handle POST request to /data
app.post("/data", (req, res) => {
  const data = JSON.stringify(req.body);

  fs.writeFile(path.join(__dirname, "data.json"), data, (err) => {
    if (err) {
      console.error("Error writing file", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.send("Data saved successfully");
  });
});

// Route to handle GET request to /data
app.get("/data", (req, res) => {
  fs.readFile(path.join(__dirname, "data.json"), "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

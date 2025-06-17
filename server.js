const express = require("express");
const path = require("path");

const app = express();
const PORT = 5000;

// Serve the HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "calculator.html"));
});

// Start the server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});

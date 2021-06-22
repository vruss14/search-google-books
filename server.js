const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const apiRoutes = require("./controllers/api");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API routes
app.use("/api", apiRoutes);

// Register service worker before wildcard route

app.get("/registerServiceWorker.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "service-worker.js"));
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

app.listen(PORT, () => {
  console.log(`🌎 ==> Express/Node.js API server now on http://localhost:${PORT}`);
});

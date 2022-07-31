const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3002;


//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", htmlRoutes);
app.use("/api", apiRoutes);


app.listen(PORT, () =>
  console.log(`Listening for requests on port ${PORT}! 🏎️`)
);
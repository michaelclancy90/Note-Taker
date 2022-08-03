const express = require('express');
const apiRoutes = require('./routes/notesRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 3001;


//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", htmlRoutes);
app.use("/api", apiRoutes);


app.listen(PORT, () =>
  console.log(`Listening for requests on port ${PORT}!`)
);
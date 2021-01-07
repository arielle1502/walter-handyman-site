// require node modules
const express = require('express');
require('dotenv').config();

// init application
const app = express();

// require routes
const emailRoutes = require('./routes/email')
;
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/form', emailRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port: ${PORT}`));

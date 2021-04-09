const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const reg = require('./routes/reg.routes.js');
const login = require('./routes/login.routes.js');
const verify = require('./routes/verify.routes.js');
const panel = require('./routes/panel.routes.js');

dotenv.config();
const app = express();

mongoose
  .connect(process.env.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log(`connect has started...`));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', reg);
app.use('/api', login);
app.use('/api', verify);
app.use('/api', panel);

module.exports = app;

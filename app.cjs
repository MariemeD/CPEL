const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const connexionChain = 'mongodb+srv://CPEL_USER:coucoucpel@cluster0.82glw.mongodb.net/CPEL?retryWrites=true&w=majority'
var routes = require('./routes/routes');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use('/', routes);

mongoose.connect(connexionChain, { useUnifiedTopology: true, useNewUrlParser: true  })
    .then(client => {
      console.log('Base de données : OK')
    })

app.listen(3000, function() {
  console.log('Server : OK');
})

module.exports = app;


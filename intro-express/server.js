// Load express
const express = require('express');
const path = require('path');

// require the To Do "database"
const todoDb = require('./data/todo-db');

// Create our express app
const app = express();

// Confugure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Mount middleware (app.use)

// Mount Routes

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/', function (req, res) {
    //path must start with a leading slash
  res.redirect('/todos');
});

app.get('/home', function (req, res) {
    //never begin the name of the template with a forward slash
    res.render('home');
  });

  app.get('/todos', function(req, res) {
    const todos = todoDb.getAll();
    res.render('todos/index', { todos });
  });

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});
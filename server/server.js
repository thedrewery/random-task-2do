const express = require('express');
const path = require('path');
const taskController = require('./controllers/taskController');
const app = express();
const Task = require('./models/TaskModel');

const PORT = 3333;

//consider refactoring to get express router working
//const taskRouter = express.Router();

app.use(express.json()); //parses body for any request that comes in in json
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../assets')));

app.get('/', (req, res) => {
  console.log('it is working!');
  return res.status(200).sendFile(path.resolve('./views/index.html'));
});

app.get('/secret', (req, res) => {
  return res.status(200).sendFile(path.resolve('./views/secret.html'));
});

//sign in
app.post('/signin', (req, res) => {
  return res.redirect('/secret');
});

app.post('/secret/item', taskController.postTask, (req, res) => {
  return res.sendStatus(200);
});

app.get('/secret/item', taskController.getTasks, (req, res) => {
  return res.status(200).json(res.locals.results);
});
//app.use('poop', taskRouter)
app.delete('/secret/item/:_id', taskController.deleteTask, (req, res) => {
  return res.status(200).json(res.locals.results);
});

//error handler for errors in any route for 404

// Global Error Handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Error has handler caught unknown middleware error',
    status: 400,
    message: { err: '400 ERROR' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, () => {
  console.log('listening on port 3333');
});
const res = require('express/lib/response');
const Task = require('../models/TaskModel');
//const path = require('path');

const TaskController = {};

//do not end the response inside of middleware (removed return statements)
TaskController.postTask = (req, res, next) => {
  console.log('in post');
  const { item, created_at } = req.body;
  //const dateString = new Date;
  Task.create({ item: item})
    .then(() => {
      return next();
    })
    .catch(err => {
      return next(err);
    });
};

//add data onto response locals object in database controller file too
TaskController.getTasks = (req, res, next) => {
  console.log('in get');
  Task.find({})
    .then(data => {
      res.locals.results = data;
      console.log(data);
      return next();
    })
    .catch(err => {
      return next(err);
    });
};

TaskController.deleteTask = (req, res, next) => {
  console.log('in delete');
  const { _id } = req.params; // req.params._id._id
  console.log('line 38',req.params);
  console.log('the id is', _id);
  Task.findOneAndDelete({ _id })
    .then(response => {
      return next();
    })
    .catch(err => {
      return next(err);
    });
};


module.exports = TaskController;
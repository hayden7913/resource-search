const express = require('express');
const taskRouter = express.Router({mergeParams: true});
const {Projects} = require('./models');

taskRouter.get('/', (req, res) => {
  Projects
    .findById(req.params.id)
    .exec()
    .then(projects => {
      const tasks = projects.tasks
      res.json({
        tasks
      });
    })
    .catch(
      err => {
        console.error(err);
        res.status(500).json({message: 'Internal Server Error'});
      }
    )
});

module.exports = taskRouter;
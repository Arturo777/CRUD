module.exports = function () {

  let db = require('../libs/db-connection')();
  let Schema = require('mongoose').Schema;

  var Task = Schema({
    title: String,
    description: String,
    status: Boolean
  })

  return db.model('tasks', Task)
} 


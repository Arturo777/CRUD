const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let db;

module.exports = function functionName() {
  if (!db) {1
    db = mongoose.createConnection('mongodb://localhost/crud-example', { useNewUrlParser: true,
    useUnifiedTopology: true
    });
  };
  
  return db;
}
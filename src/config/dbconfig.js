'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri : 'mongodb://localhost/dbz',
      options : {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      poolSize: 20,
      connectTimeoutMS:360000,
      serverSelectionTimeoutMS: 50000
    }
  }
};


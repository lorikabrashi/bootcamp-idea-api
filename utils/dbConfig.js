const mongoose = require('mongoose')
module.exports = {
  connect: () => {
    mongoose.connect(process.env.DB_CONNECTION_STRING, () => {
      console.log('db connected')
    });
  }
}
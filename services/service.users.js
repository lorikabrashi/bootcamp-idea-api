const userModel = require('../models/models.users')
module.exports = {
  insertUser: async (values) => {
    const result = await userModel.create(values)
    return result._id
  },
  getUserByEmail: async (email) => {
    const result = await userModel.findOne({email})
    return result
  },
}

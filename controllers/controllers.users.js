const userService = require('../services/service.users')
const bcrypt = require('bcrypt')

module.exports = {
  createUser: async (values) => {
    const { email, password } = values

    if (!email) {
      throw Error('Email is required')
    }
    if (!password) {
      throw Error('Password is required')
    }

    const hash = await bcrypt.hash(password, parseInt(process.env.PASSWORD_SALT))

    const data = {
      email,
      password: hash,
    }

    const result = await userService.insertUser(data)
    return result
  },
}
